import React from 'react';
import '../style.css';
import "../../../../styles/variables.css";

interface Props {
    width: string;
    height: string;
    className: string;
}

const UkrPoshta: React.FC<Props> = ({ width, height, className }) => {
    return (
        <span className={className} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 186 50"
            >
                <g fill="none" fillRule="evenodd" transform="translate(-134 -20)">
                    <g transform="translate(134 20)">
                        <path d="M1 0H187V50H1z"></path>
                        <path
                            fill="#FFC627"
                            fillRule="nonzero"
                            d="M33.401 28.553l-16.39-3.728c-4.224-.958-7.185-4.781-7.072-9.13.113-4.347 3.27-8.01 7.537-8.744 4.268-.734 8.458 1.663 10.006 5.725 1.548 4.062.023 8.657-3.643 10.973a.229.229 0 00.079.404l7.292 1.658a.453.453 0 00.462-.167A15.99 15.99 0 0033.431 9.26 15.859 15.859 0 0019.962.026h-.68C12.472-.08 6.18 3.651 2.982 9.69a18.289 18.289 0 001.139 18.977l14.583 20.92a.34.34 0 00.55 0L33.61 29.106a.343.343 0 00-.21-.552z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M47.434 9.807c.142-.018.28.05.35.175l4.864 8.334h.235l4.13-8.22a.489.489 0 01.499-.289h2.969a.317.317 0 01.288.465l-8.558 15.21a.506.506 0 01-.498.264h-2.908c-.323 0-.349-.202-.235-.439l2.296-3.947-6.872-11.176c-.114-.202 0-.377.174-.377h3.266zM65.877 9.807a.366.366 0 01.41.412v6.255l6.55-6.43c.218-.166.487-.25.76-.237h3.554c.262 0 .349.237.148.439l-6.986 6.552 7.397 8.509a.246.246 0 01-.175.439h-3.493a.871.871 0 01-.725-.29l-5.545-6.561-1.502 1.403v5.044a.37.37 0 01-.41.412H63.3a.366.366 0 01-.41-.412v-15.14a.37.37 0 01.41-.413h2.559l.017.018zM87.385 9.807a5.87 5.87 0 014.318 1.596 5.925 5.925 0 011.856 4.229c0 3.394-2.62 5.877-6.174 5.877h-4.218v3.833a.37.37 0 01-.41.412h-2.559a.366.366 0 01-.41-.412v-15.14a.37.37 0 01.41-.413h7.196l-.009.018zm0 8.482a2.543 2.543 0 001.99-.68 2.567 2.567 0 00.804-1.951 2.54 2.54 0 00-.795-1.96 2.517 2.517 0 00-1.999-.672h-4.218v5.263h4.218zM109.47 9.807a.366.366 0 01.41.412v15.123a.37.37 0 01-.41.412h-2.56a.366.366 0 01-.41-.412v-12.36h-7.047v12.343a.37.37 0 01-.41.412h-2.559a.366.366 0 01-.41-.412V10.202a.37.37 0 01.41-.413h12.985v.018zM121.24 9.561c4.488.102 8.055 3.82 7.99 8.328-.065 4.509-3.738 8.121-8.227 8.091-4.489-.03-8.113-3.69-8.12-8.2 0-2.21.886-4.328 2.459-5.874a8.162 8.162 0 015.899-2.345m-4.952 8.22c.039 2.725 2.26 4.908 4.974 4.885 2.714-.022 4.9-2.241 4.893-4.967-.006-2.726-2.202-4.935-4.915-4.945a4.765 4.765 0 00-3.576 1.42 4.81 4.81 0 00-1.376 3.607M140.88 22.544V10.202a.37.37 0 01.41-.413h2.506a.366.366 0 01.41.413v12.342h4.978V10.202a.37.37 0 01.41-.413h2.507a.366.366 0 01.41.413v15.123a.37.37 0 01-.41.412h-19.115a.4.4 0 01-.41-.412V10.202a.37.37 0 01.41-.413h2.506a.366.366 0 01.41.413v12.342h4.978zM168.675 9.807a.366.366 0 01.41.412v2.395a.37.37 0 01-.41.412h-5.065v12.281a.37.37 0 01-.41.412h-2.559a.366.366 0 01-.41-.412v-12.28h-5.039a.366.366 0 01-.41-.413v-2.395a.37.37 0 01.41-.412h13.51-.027zM181.127 22.579h-7.92l-1.109 2.807a.498.498 0 01-.498.35h-2.881c-.289 0-.376-.148-.289-.411l6.847-15.299a.367.367 0 01.375-.237h3.318a.367.367 0 01.376.237l6.55 15.237a.335.335 0 01-.324.465h-2.768a.629.629 0 01-.611-.412l-1.066-2.737zm-6.697-3.07h5.527l-2.558-6.553h-.324l-2.645 6.553z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M46.2380282 39.4035088L46.2380282 32.6140351 50.7090141 32.6140351 50.7090141 33.4035088 47.1374648 33.4035088 47.1374648 39.4473684 46.2642254 39.4473684z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M58.533 35.93c0 2-1.1 3.631-3.257 3.631s-3.257-1.666-3.257-3.649c0-2.131 1.266-3.508 3.248-3.508 2.122.008 3.266 1.49 3.266 3.526zm-5.615.044c0 1.71.926 2.807 2.367 2.807 1.44 0 2.349-1.114 2.349-2.807 0-1.693-.926-2.781-2.367-2.781-1.606.009-2.357 1.333-2.357 2.79l.008-.01zM65.563 39.404h-.873V33.36h-2.515l-.131 3.842c-.044 1.368-.542 2.342-1.572 2.342a2.114 2.114 0 01-.646-.132v-.763c.154.067.32.1.489.097.489 0 .873-.272.873-2l.122-4.158h4.27v6.824l-.017-.008zM74.19 35.93c0 2-1.1 3.631-3.257 3.631s-3.257-1.666-3.257-3.649c0-2.131 1.275-3.508 3.249-3.508 2.113.008 3.265 1.49 3.265 3.526zm-5.615.044c0 1.71.926 2.807 2.367 2.807 1.44 0 2.349-1.114 2.349-2.807 0-1.693-.926-2.781-2.366-2.781-1.607.009-2.35 1.333-2.35 2.79v-.01zM79.22 32.614c1.127 0 2.166.447 2.166 1.71a1.526 1.526 0 01-1.004 1.465 1.63 1.63 0 011.31 1.755c0 1.57-1.284 1.93-2.62 1.93h-2.803v-6.86h2.951zm-2.026 2.921h1.616c.768 0 1.685-.061 1.685-1.079 0-1.017-.794-1.07-1.598-1.07h-1.703v2.158-.009zm0 3.14h1.8c.872 0 1.798-.061 1.798-1.254s-1.039-1.175-1.947-1.175h-1.642v2.438l-.009-.009z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M89.2188732 39.4035088L88.3456338 39.4035088 88.3456338 36.2105263 84.7566197 36.2105263 84.7566197 39.4035088 83.8833803 39.4035088 83.8833803 32.6140351 84.7566197 32.6140351 84.7566197 35.4649123 88.3456338 35.4649123 88.3456338 32.6140351 89.2188732 32.6140351 89.2188732 39.4385965z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M97.41 39.404h-1.004l-.751-2.088h-2.856l-.777 2.088h-.952l2.672-6.825h1.013l2.655 6.825zm-3.179-5.965l-1.179 3.157h2.332L94.23 33.44z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M108.482535 39.4035088L107.609296 39.4035088 107.609296 33.3596491 104.020282 33.3596491 104.020282 39.4035088 103.147042 39.4035088 103.147042 32.6140351 108.53493 32.6140351 108.53493 39.4385965z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M117.128 35.93c0 2-1.1 3.631-3.258 3.631-2.156 0-3.257-1.666-3.257-3.649 0-2.131 1.266-3.508 3.249-3.508 2.113.008 3.266 1.49 3.266 3.526zm-5.615.044c0 1.71.925 2.807 2.366 2.807s2.35-1.114 2.35-2.807c0-1.693-.926-2.781-2.367-2.781-1.607.009-2.332 1.333-2.332 2.79l-.017-.01z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M119.240845 32.6140351L120.114085 32.6140351 120.114085 38.6578947 123.135493 38.6578947 123.135493 32.6140351 124.008732 32.6140351 124.008732 38.6578947 127.030141 38.6578947 127.030141 32.6140351 127.90338 32.6140351 127.90338 39.4385965 119.170986 39.4385965 119.170986 32.6140351z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M135.34338 33.3596491L133.064225 33.3596491 133.064225 39.4035088 132.190986 39.4035088 132.190986 33.3596491 129.868169 33.3596491 129.868169 32.6140351 135.334648 32.6140351 135.334648 33.4035088z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M142.006 39.404h-1.004l-.751-2.088h-2.856l-.777 2.088h-.952l2.673-6.79h1.013l2.654 6.79zm-3.178-5.965l-1.18 3.157h2.332l-1.152-3.157z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M150.345634 35.3157895L153.32338 39.4035088 152.179437 39.4035088 149.716901 35.8947368 148.590423 37 148.590423 39.3947368 147.717183 39.3947368 147.717183 32.6140351 148.590423 32.6140351 148.590423 36 152.039718 32.6140351 153.218592 32.6140351z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M158.021 32.614c1.302 0 2.262.544 2.262 1.965s-.995 2.061-2.323 2.061h-1.842v2.799h-.873v-6.825h2.803-.027zm-1.903 3.272h1.746c.873 0 1.537-.237 1.537-1.246 0-1.008-.777-1.245-1.659-1.245h-1.607v2.491h-.017zM167.417 39.404h-1.004l-.742-2.088h-2.856l-.777 2.088h-.952l2.673-6.825h1.039l2.62 6.825zm-3.178-5.965l-1.179 3.157h2.332l-1.153-3.157zM169.286 31.991h-.873v-.965h.873v.965zm.917 7.413h-.873v-6.79h.873v6.825-.035zm.873-7.413h-.873v-.965h.873v.965z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M178.079718 39.4035088L177.206479 39.4035088 177.206479 36.2105263 173.617465 36.2105263 173.617465 39.4035088 172.744225 39.4035088 172.744225 32.6140351 173.617465 32.6140351 173.617465 35.4649123 177.206479 35.4649123 177.206479 32.6140351 178.079718 32.6140351 178.079718 39.4385965z"
                        ></path>
                        <path
                            fill="#000"
                            fillRule="nonzero"
                            d="M180.516056 32.6140351L181.389296 32.6140351 181.389296 38.3947368 181.389296 38.3947368 184.72507 32.6140351 185.860282 32.6140351 185.860282 39.4385965 184.987042 39.4385965 184.987042 33.6403509 184.987042 33.6403509 181.642535 39.4385965 180.516056 39.4385965z"
                        ></path>
                    </g>
                </g>
            </svg>
        </span>
    );
}

export default UkrPoshta;