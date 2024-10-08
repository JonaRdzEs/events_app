function PlaneIcon({ className = "", color = "#4caf50", width = "90px", height = "90px" }) {
  return (
    <svg
      className={className}
      version="1.1"
      viewBox="0 0 32 32"
      fill={color}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
    >
      <path
        d="M31,5c0-1.1-0.4-2.1-1.2-2.8c-1.6-1.6-4.1-1.6-5.7,0l-4.3,4.3L7.3,2.6c-0.4-0.1-0.7,0-1,0.2L3.4,5.7C3.2,6,3.1,6.3,3.2,6.6
        s0.3,0.6,0.5,0.7l10.2,5.1l-4.1,4.1l-4.4-0.3c-0.3,0-0.6,0.1-0.8,0.3l-3.3,3.3c-0.3,0.3-0.4,0.7-0.2,1c0.1,0.4,0.4,0.6,0.8,0.7
        l7.3,1.3l1.3,7.3c0.1,0.4,0.3,0.7,0.7,0.8c0.1,0,0.2,0,0.3,0c0.3,0,0.5-0.1,0.7-0.3l3.3-3.3c0.2-0.2,0.3-0.5,0.3-0.8l-0.3-4.4
        l4.1-4.1l5.1,10.2c0.1,0.3,0.4,0.5,0.7,0.5c0.3,0,0.6-0.1,0.9-0.3l2.9-2.9c0.3-0.3,0.4-0.6,0.3-1l-3.8-12.6l4.3-4.3
        C30.6,7.1,31,6.1,31,5z"
      />
    </svg>
  );
}

export default PlaneIcon;
