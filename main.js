const SPACE = 'k9mhf5ofb802';
const TOKEN = '';

const BASE = 'https://cdn.contentful.com/spaces'

const getUrl = (id) => `${BASE}/${SPACE}/entries/${id}?access_token=${TOKEN}`;

const getAssetUrl = (id) => `${BASE}/${SPACE}/assets/${id}?access_token=${TOKEN}`;

const getEntry = (url) => fetch(url).then(res => res.json()).catch(console.log);

const getAllEntries = (ids) => Promise.all(ids.map(id => getEntry(getUrl(id))))

const extractIds = (datastruct) => datastruct.map(el => el.sys.id);

const unifyAllData = (arr) => Promise.all(arr.map(unifyData))

const extractType = async (e) => {
  const arr = [];
  for (let key in e) {
    const val = e[key];
    const type = typeof val;
    if (Array.isArray(val)) {
      const ids = extractIds(val);
      const data = await getAllEntries(ids);
      const unifiedData = await unifyAllData(data);
      arr.push(unifiedData);
    } else if (type === 'string') {
      arr.push({
        type: 'string',
        value: val,
      });
    } else if (type === 'boolean') {
      arr.push({
        type: 'boolean',
        value: val,
      });
    } else if (type === 'object' && val.hasOwnProperty('nodeType')) {
      arr.push({
        type: 'richtext',
        value: val.content,
      });
    } else if (type === 'object' && val.hasOwnProperty('lon') && val.hasOwnProperty('lat')) {
      arr.push({
        type: 'coordinates',
        value: { ...val },
      });
    } else if (type === 'object' && val.hasOwnProperty('sys') && val.sys.linkType === "Asset") {
      const id = val.sys.id;
      const data = await getEntry(getAssetUrl(id));
      arr.push([{
        type: 'Object',
        id,
        meta: {
          type: 'Asset',
          id: 'Asset'
        },
        fields: data.fields,
      }])
    } else {
      console.warn('⚠️ something not implemented yet');
    }

  }
  return arr;
}



async function unifyData(e) {
  try {
    const a = e.sys.id;
  } catch (error) {
    debugger;
  }
  try {
    const a = e.sys.contentType.sys;
  } catch (error) {
    debugger;
  }
  return {
    type: 'Object',
    id: e.sys.id,
    meta: {
      ...e.sys.contentType.sys
    },
    fields: await extractType(e.fields)
  }
}

const getPage = async (entrypoint) => {
  const url = getUrl(entrypoint);
  const data = await getEntry(url);
  return unifyData(data);
}

const renderRichText = (rt) => rt.map(r => {
  if (r.nodeType === 'text') {
    return r.value;
  }
  if (r.nodeType === 'paragraph') {
    return `<p>${renderRichText(r.content)}</p>`;
  }
  if (r.nodeType === 'heading-3') {
    return `<h3>${renderRichText(r.content)}</h3>`;
  }
  console.log(r);
  console.warn('⚠️ something not implemented yet');
  return '';
}).join('')

const renderElements = data => {
  if (data.type === 'Object' && data.meta.id === 'Asset') {
    const file = data.fields.file;
    if (file.contentType === "video/mp4") {
      return `<video autoplay loop muted class="video-stage__video">
      <source src="${file.url}" type="video/mp4">
      Your browser does not support the video tag.
  </video>`
    }
    return `<img src="${file.url}" />`;
  }
  if (data.hasOwnProperty('type') && data.type === 'Object') {
    return `<div class="${data.meta.id}">
      ${data.fields.map(f => {
      if (Array.isArray(f)) {
        return f.map(ff => renderElements(ff)).join('')
      }
      return renderElements(f)
    }).join('')}
    </div>`
  }
  if (data.type === 'string') {
    return `<p>${data.value}</p>`
  }
  if (data.type === 'boolean') {
    return `<p>boolean: ${data.value ? 'true' : 'false'}</p>`
  }
  if (data.type === 'coordinates') {
    return `<p>coordinates: ${data.value.lon} / ${data.value.lat}</p>`
  }
  if (data.type === 'richtext') {
    return renderRichText(data.value);
  }
  console.log(data.type);
  console.log(data.value);
  return `<p>⚠️ not ready yet</p>`
}

(async () => {
  const htmlElement = document.getElementById('root');
  const entryPoint = '7CNhvCRqMnY8D5NhxwEdXM';
  const page = await getPage(entryPoint);
  const html = renderElements(page);
  htmlElement.innerHTML = html;
})()
