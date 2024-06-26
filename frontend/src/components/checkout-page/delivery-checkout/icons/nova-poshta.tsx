import React from 'react';
import '../style.css';
import "../../../../styles/variables.css";

interface Props {
    width: string;
    height: string;
    className: string;
}

const NovaPoshta: React.FC<Props> = ({ width, height, className }) => {
    return (
        <span className={className} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 210 75"
                preserveAspectRatio="xMidYMid meet"
                version="1.1"
            >
            <g transform="translate(0 -977.362)">
                <g
                    fill="#ed1c24"
                    fillOpacity="1"
                    fillRule="evenodd"
                    stroke="none"
                    transform="matrix(.9681 0 0 .96386 77.34 1074.547)"
                >
                    <path d="M15.068-87.63h4.563c1.662 0 2.5.825 2.5 2.688v6.6h8.937v-6.6c0-1.863.825-2.688 2.7-2.688h4.363v4.338h-1.863l-.212.212v18.575h-4.988v-9.287h-8.937v9.287h-4.988V-83.08s0-.212-.212-.212h-1.863v-4.338z"></path>
                    <path d="M51.218-88.042l.113.012v4.763l-.113-.025c-3.737 0-6.65 3.1-6.65 7.025 0 4.125 2.913 7.425 6.65 7.425l.113-.025v4.762l-.113.013c-6.65 0-12.05-5.363-12.05-12.175 0-6.613 5.4-11.775 12.05-11.775z"></path>
                    <path d="M51.33-88.03l2.313.225c5.488 1.075 9.625 5.75 9.625 11.538 0 5.95-4.137 10.812-9.625 11.925l-2.312.237v-4.762l2.537-.55c2.45-1.125 4.213-3.763 4.213-6.85 0-2.95-1.763-5.425-4.213-6.475l-2.537-.525v-4.763z"></path>
                    <path d="M64.306-87.63H74.593v4.338H71.368v4.75h3.225v4.125H71.368v5.162c0 .213 0 .213.213.213h3.012v4.537H68.881c-1.663 0-2.488-.825-2.488-2.687v-16.1h-2.087v-4.338z"></path>
                    <path d="M74.593-87.63h.1c4.575 0 7.275 2.475 7.275 6.2 0 2.263-1.037 3.713-2.075 4.75 1.875.825 3.113 2.888 3.113 5.15 0 4.338-3.325 7.025-8.1 7.025h-.313v-4.537h.513c1.662 0 2.712-1.038 2.712-2.688 0-1.65-1.05-2.687-2.712-2.687h-.513v-4.125h.1c1.463 0 2.288-1.038 2.288-2.475 0-1.45-.825-2.275-2.288-2.275h-.1v-4.338z"></path>
                    <path d="M92.568-87.63h2.488v6.613c-.2.412-.413 1.025-.413 1.65l-1.662 4.75h2.075v4.325h-3.313l-1.462 3.725c-.413 1.437-1.238 2.062-2.9 2.062h-3.125v-4.537h1.037c.425 0 .425 0 .625-.213l6.65-18.375z"></path>
                    <path d="M95.056-87.63h2.5l6.65 18.375c.2.213.2.213.612.213h.838v4.537h-2.913c-1.662 0-2.487-.625-2.912-2.275l-1.45-3.512H95.056v-4.325h2.075l-1.65-4.75c0-.625-.213-1.238-.425-1.65v-6.613z"></path>
                    <path d="M15.068-57.905h18.075c1.663 0 2.7.825 2.7 2.688v15.687c0 .2 0 .2.213.2h1.662v4.55h-4.362c-1.875 0-2.7-.825-2.7-2.687v-15.888s0-.212-.213-.212h-8.312v18.787h-4.988v-18.787h-2.075v-4.338z"></path>
                    <path d="M50.806-58.317l.1.012v4.763l-.1-.025c-3.75 0-6.65 3.1-6.65 7.025 0 4.125 2.9 7.425 6.65 7.425l.1-.025v4.762l-.1.013c-6.65 0-11.85-5.375-11.85-12.175 0-6.613 5.2-11.775 11.85-11.775z"></path>
                    <path d="M50.906-58.305l2.387.225c5.588 1.075 9.563 5.75 9.563 11.538 0 5.95-3.975 10.812-9.563 11.925l-2.387.237v-4.762l2.637-.55c2.488-1.125 4.125-3.763 4.125-6.85 0-2.95-1.637-5.425-4.125-6.475l-2.637-.525v-4.763z"></path>
                    <path d="M63.893-57.905h4.575c1.663 0 2.488.825 2.488 2.688v15.687c0 .2 0 .2.212.2h6.025v-18.575h4.988v18.575h6.025c.212 0 .212 0 .212-.2v-15.687c0-1.863.825-2.688 2.488-2.688h4.575v4.338h-1.875c-.213 0-.213.212-.213.212v15.888c0 1.862-.825 2.687-2.487 2.687H68.668c-1.862 0-2.7-.825-2.7-2.687v-15.888s0-.212-.2-.212h-1.875v-4.338z"></path>
                    <path d="M99.418-57.905h15.588c1.875 0 2.5.825 2.5 2.475v3.925h-4.575v-1.85c0-.212 0-.212-.213-.212h-2.9v18.787h-5v-18.787h-2.9c-.212 0-.212 0-.212.212v1.85H97.13v-3.925c0-1.65.625-2.475 2.287-2.475z"></path>
                    <path d="M123.943-57.905h2.488v6.613a3.773 3.773 0 00-.413 1.65l-1.662 4.75h2.075v4.325h-3.325l-1.45 3.512c-.413 1.65-1.25 2.275-2.913 2.275h-3.112v-4.55h1.037c.425 0 .425 0 .625-.2l6.65-18.375z"></path>
                    <path d="M126.43-57.905h2.488l6.663 18.375c.2.2.2.2.625.2h.825v4.55h-2.913c-1.662 0-2.487-.625-2.912-2.275l-1.45-3.512H126.43v-4.325h2.075l-1.663-4.75c0-.625-.2-1.238-.412-1.65v-6.613z"></path>
                    <path d="M-16.957-77.792c.238-.075.55.075.863.487L-1.97-63.48c.825.825.825 2.075 0 2.688l-14.125 14.037c-.313.413-.625.513-.863.388-.237-.125-.387-.488-.387-1.013v-29.512c0-.513.15-.825.387-.9z"></path>
                    <path d="M-41.12-100.83h1l.963.4 14.538 14.45c.625.825.412 1.45-.625 1.45h-6.025a1.851 1.851 0 00-1.863 1.863v10.725c0 1.037-.837 1.862-2.087 1.862h-10.588a1.862 1.862 0 01-1.875-1.862v-10.725a1.854 1.854 0 00-1.875-1.863h-6.437c-1.038 0-1.25-.625-.625-1.45l14.55-14.45.95-.4z"></path>
                    <path d="M-63.894-78.105c.262.125.425.488.425 1.013v30.125c0 .525-.163.837-.425.937-.25.1-.613 0-1.038-.312l-14.337-14.45c-.825-.613-.825-1.863 0-2.688l14.337-14.237c.425-.413.788-.513 1.038-.388z"></path>
                    <path d="M-45.807-54.392h10.588c1.25 0 2.087.825 2.087 1.862v11.35c0 1.238.825 2.063 1.863 2.063h5.612c1.038 0 1.45.612.625 1.237l-14.125 14.238c-.425.412-.937.625-1.462.625a2.063 2.063 0 01-1.45-.625L-56.194-37.88c-.838-.625-.425-1.237.612-1.237h6.025c1.05 0 1.875-.825 1.875-2.063v-11.35c0-1.037.838-1.862 1.875-1.862z"></path>
                </g>
            </g>
            </svg>
        </span>
    );
}

export default NovaPoshta;