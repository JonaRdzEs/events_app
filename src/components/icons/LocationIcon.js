function LocationIcon({ color = "#358438", width = "90px", height = "90px" }) {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52 52"
      enableBackground="new 0 0 52 52"
      xmlSpace="preserve"
    >
      <path
        d="M48.8,9.5L34.4,2.3c-0.7-0.3-1.5-0.3-2.1,0L19,9L5.6,2.3C4.8,1.9,3.8,1.9,3.1,2.4C2.4,2.8,2,3.6,2,4.4v36
        c0,0.9,0.5,1.7,1.3,2.1l14.4,7.2c0.7,0.3,1.5,0.3,2.1,0L33.2,43l13.3,6.7c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.9-0.1,1.3-0.4
        c0.7-0.4,1.1-1.2,1.1-2v-36C50,10.7,49.6,9.9,48.8,9.5z M45,14.1v19c0,1.1-1,1.9-2,1.5c-3.7-1.4-0.7-7.6-3.4-11
        c-2.5-3.1-5.7,0.1-8.8-4.8c-2.9-4.7,1-8.1,4.6-9.9c0.5-0.2,1-0.2,1.4,0l7.4,3.7C44.8,12.9,45,13.5,45,14.1z M24.9,41.9
        c-0.6,0.3-1.3,0.2-1.8-0.2c-1-0.9-1.8-2.3-1.8-3.7c0-2.4-4-1.6-4-6.4c0-3.9-4.6-4.9-8.5-4.5c-1,0.1-1.7-0.6-1.7-1.6V10.9
        c0-1.2,1.2-2,2.2-1.4l8.6,4.3c0.1,0,0.2,0.1,0.2,0.1l0.3,0.2c3.6,2.1,2.9,3.8,1.4,6.4c-1.7,2.9-2.4,0-4.8-0.8s-4.8,0.8-4,2.4
        s3.2,0,4.8,1.6s1.6,4,6.4,2.4s5.6-0.8,7.2,0.8c1.6,1.6,2.4,4.8,0,7.2c-1.4,1.4-2,4.4-2.6,6.4c-0.1,0.4-0.4,0.8-0.8,1L24.9,41.9z"
      />
    </svg>
  );
}

export default LocationIcon;
