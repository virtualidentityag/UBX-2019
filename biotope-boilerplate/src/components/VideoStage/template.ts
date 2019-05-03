import * as styles from './styles.scss';

interface VideoStageTemplateData {

}

export default (render: Function, data: VideoStageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <header class="video-stage">
            <div class="video-stage__overlay">
                <span>WELCOME TO</span>
                <svg width="400" viewBox="0 0 516.63 365.29"><path d="M41.84,191l7.25-5.58c4.56,0,7.6,4.9,12.33,4.9,4,0,3.71-15,3.71-18.57L65,158.19l-1.52-1.52-2.7-.16C52,156,38,163.09,35.08,163.09c-3.88,0-5.4-3.71-5.4-7.09,0-10.81,25-9.12,32.92-9.79l1.69-1.52v-6.75c0-8.11-2.53-15.87-2.53-23.3,0-1.86,4.72-4.39,6.41-4.39,10.47,0,4.39,24.48,4.73,30.72l.17,2.87.67.85,7.6.17a20.21,20.21,0,0,0,7.6-1.86c0-15.36-.85-30.56-.85-45.92,0-1.52.68-3.71.85-5.23a16,16,0,0,1,6.24-1.52c2.37,0,2.87.84,3.38,3.21,0,7.93-1.35,16.37-1.52,24-.17,6.41-.51,20.76,0,25.49,5.74,0,11.31-.84,17-.84,2,0,11.48.67,10.81,4.05l-.68,3.21c-8.44.67-19.24.5-27.18,3.2-1.35,9.46-1.86,26.68-1.86,36.3l2.87-1.86c7.43,0,13.17-6.58,20.6-6.58l1.52,1.35c-.17,4.22-20.93,10.8-24,15.53.33,3.21,1.35,21.44-2,23.47L91.3,221c-3.38.16-6.92-2.54-6.92-6.08,0-2.53,2.7-4,2.7-6.75l-.34-8.28c-15.53,0-9.62-2.19-11.65,8.61,2,3.38,1.19,23,1.19,24.82,0,3-2.71,6.58-5.91,6.58-8.11,0-6.76-28.53-7.77-36.12l-1.52-1.52C53.48,201.75,41.84,201.24,41.84,191Zm31.23.84h3.37c1.86,0,9.63,0,10.64-1.18,1.35-1.69,1.86-18.4,1.86-22.12,0-5.57,2.36-15-5.57-15-1.35,0-10.3,2.36-10.3,3.2l-1.69,20.77a3.73,3.73,0,0,1,.84,1.86c0,3.37-.84,6.92-.84,10.3C71.38,190.44,72.05,191.79,73.07,191.79Z"/><path d="M141.27,167.82,145,171.7c.33,5.23,2.87,55.88,17.89,55.88,26.68,0,25.66-52.17,25.66-69.05a18.59,18.59,0,0,1,.85-4.22h.67c4.9,0,6.08,22.62,6.08,26,0,14.35-10.64,58.58-29.71,58.58-25,0-26.85-38.32-29.88-53.68-.68-4.06-4.39-7.09-4.39-11.32S137.9,167.82,141.27,167.82Z"/><path d="M254.55,178.62c9.62,0,14.69,7.09,14.69,16.21,0,14.86-34.78,47.44-46.43,47.44a4.36,4.36,0,0,1-4.22-3.72l-1.35,5.74c-5.74-.33.17,1.19-5.57,1.19-.5,0-1.18-.17-1.18-.68,0-47.61,3.38-88.63,7.93-135.9,2.71-7.09,7.6-6.92,8.78,0-4.89,38.49-6.41,67.36-8.44,106C225.52,202.76,238.68,178.62,254.55,178.62Zm-33.93,48.62,2.7,4.22c6.92-4.55,15-7.59,21.61-12.83,4-3.2,15.19-16.71,15.19-21.78,0-3.88-1.35-8.61-6.07-8.61-10.13,0-33.77,29.55-33.77,39C220.28,227.41,220.62,227.41,220.62,227.24Z"/><path d="M287.47,245c0-17.05,18.07-46.93,17.56-51.83-5.4-5.91-25.66-17.56-25.66-24.48,0-3.71,3.54-5.91,6.92-5.91,7.26,0,18.06,17.56,25.16,21.61,13.16-11.82,21.6-41.7,43.21-41.7,2.71,0,4.9,1.52,4.9,4.39,0,6.92-5.91,5.57-10.47,8.44-6.92,4.39-29.71,26.85-29.71,34.44,0,5.07,25.32,21.61,30.22,21.61,2,0,3.38-1.69,5.4-1.69a10.32,10.32,0,0,1,2,.85v2.7c0,6.41-3.55,7.76-9.29,7.76-11,0-30.22-20.93-34.27-20.93-7.6,0-21.1,47.78-22,51.15l-2,.85-2-.85Z"/><path d="M380.5,122.74c2.36,0,4.55,1.52,6.07,3.21v7.26c0,29.54-2.53,59.42-2.53,89,0,7.09,3.21,13.5,3.21,20.26,0,1.18-2,2.87-3,2.87-4.22,0-8.1-11.48-8.1-15.2,0-22.28,2.36-44.57,2.36-67,0-14-4.73-28.53-4.73-33.6C373.74,126.29,377.29,122.74,380.5,122.74Z"/><path d="M464.57,164.78c0-1.52-.17-5.07-2.37-5.07-7.09,0-26.67,16.72-38,16.72-9.62,0-18.91-1.69-18.91-13.34,0-21.27,23.64-33.76,42.54-33.76,8.45,0,28,13.67,28,21.44,0,5.23-1.18,24.48-4.05,28-1,10.81-9.12,60.44-4.9,67.19,1.86,2.87,4.9.68,4.9,5.57,0,4.22-4.73,5.57-8.11,5.57-8.1,0-7.25-6.24-7.25-12.32C456.47,218,464.57,192.13,464.57,164.78ZM423,167c5.57,0,35.28-14,35.28-19.41,0-4.56-7.93-7.94-11.82-7.94-15.19,0-30.72,8.28-30.72,24.82C417.63,167.14,420.17,167,423,167Z"/></svg>
                <span class="video-stage__date">17.October 2019, Munich</span>
                <h1>Creating digital Opportunities</h1>
            </div>
            <video autoplay loop muted class="video-stage__video">
                <source src="../resources/video/imagefilm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </header>
        `;
}