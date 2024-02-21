import React from "react";

export default function Logo({ width, height }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || '235px'} height={height || '80px'} viewBox="0 0 235 80" fill="none">
            <g id="moontech-logo" clipPath="url(#clip0_82_2)">
                <g id="simbolo">
                    <path id="Vector" d="M39.5731 79.7754H39.1387C17.1806 79.523 -0.0258789 62.1213 -0.0258789 40.1771C-0.0258789 18.3405 17.565 0.57666 39.1648 0.57666C58.3605 0.57666 71.6796 13.9824 75.934 26.4423C76.0124 26.6649 76.0463 26.9011 76.0338 27.1371C76.0213 27.3731 75.9627 27.6043 75.8612 27.8173C75.7598 28.0302 75.6175 28.2207 75.4428 28.3778C75.268 28.5349 75.0642 28.6554 74.843 28.7324C74.6219 28.8094 74.3878 28.8414 74.1544 28.8264C73.921 28.8114 73.6928 28.7499 73.483 28.6453C73.2733 28.5407 73.0862 28.3951 72.9324 28.217C72.7787 28.0388 72.6614 27.8317 72.5874 27.6075C68.7305 16.3106 56.6254 4.15356 39.1648 4.15356C19.5065 4.14917 3.51401 20.3089 3.51401 40.1771C3.51401 60.1463 19.1829 75.9725 39.1843 76.2007C52.2363 76.3806 64.3284 68.9591 70.7371 56.9293C70.8372 56.7067 70.9813 56.5071 71.1607 56.343C71.3401 56.1788 71.5508 56.0536 71.78 55.975C72.0091 55.8965 72.2518 55.8662 72.493 55.8861C72.7342 55.906 72.9688 55.9757 73.1822 56.0909C73.3957 56.206 73.5836 56.3642 73.7342 56.5556C73.8848 56.747 73.9949 56.9675 74.0578 57.2037C74.1208 57.4398 74.1351 57.6864 74.0999 57.9283C74.0648 58.1703 73.9809 58.4023 73.8535 58.6102C66.891 71.6999 53.7826 79.7754 39.5731 79.7754Z" fill="#082F5E"></path>
                    <path id="Vector_2" d="M38.6347 73.2689C30.6168 73.2689 22.3056 69.7798 16.3095 63.879C11.9531 59.5911 6.73448 52.0533 6.62372 40.4997C6.51948 29.3915 12.2115 18.8276 21.4804 12.929C21.8778 12.6761 22.3584 12.5931 22.8164 12.6983C23.2743 12.8034 23.6722 13.0881 23.9225 13.4897C24.1727 13.8913 24.2549 14.3768 24.1508 14.8396C24.0468 15.3024 23.765 15.7044 23.3676 15.9573C19.293 18.5779 15.9442 22.2016 13.6353 26.4883C11.3265 30.7751 10.1334 35.5842 10.168 40.4646C10.2679 50.7783 14.9088 57.502 18.7853 61.3115C24.2363 66.6747 31.8481 69.8346 39.043 69.681C45.8839 69.5669 50.7941 67.2452 52.1363 66.5364C52.3427 66.4205 52.5701 66.3474 52.805 66.3216C53.0398 66.2958 53.2774 66.3178 53.5038 66.3863C53.7301 66.4547 53.9405 66.5683 54.1228 66.7202C54.305 66.8721 54.4552 67.0594 54.5647 67.2709C54.6741 67.4825 54.7406 67.714 54.7601 67.9519C54.7796 68.1898 54.7518 68.4293 54.6783 68.6561C54.6048 68.883 54.487 69.0927 54.3321 69.2728C54.1771 69.453 53.988 69.6 53.7759 69.7052C52.2557 70.5083 46.72 73.1307 39.1017 73.2579L38.6347 73.2689Z" fill="#082F5E"></path>
                    <path id="Vector_3" d="M39.1757 65.9901C28.6798 65.9901 23.1202 60.5347 20.449 57.9124L20.1276 57.5986C19.97 57.4625 19.8416 57.2953 19.7503 57.1072C19.659 56.9191 19.6067 56.7141 19.5967 56.5049C19.5867 56.2957 19.6192 56.0866 19.6921 55.8905C19.7651 55.6944 19.8769 55.5154 20.0208 55.3646C20.1647 55.2138 20.3376 55.0943 20.5289 55.0135C20.7202 54.9327 20.9258 54.8923 21.1331 54.8948C21.3404 54.8973 21.5451 54.9426 21.7344 55.0279C21.9237 55.1133 22.0938 55.2368 22.2341 55.391L22.5642 55.7136C25.1312 58.2328 29.9111 62.9245 39.1757 62.9245C42.1974 62.936 45.1914 62.3406 47.9834 61.1728C50.7755 60.0049 53.31 58.288 55.4396 56.1218C57.5351 54.0151 59.1953 51.5087 60.3238 48.7481C61.4523 45.9876 62.0266 43.0279 62.0134 40.0411C61.9808 29.2094 54.5796 20.006 44.0099 17.658C43.6368 17.5516 43.318 17.3051 43.1188 16.969C42.9195 16.6329 42.8549 16.2326 42.9382 15.85C43.0214 15.4674 43.2462 15.1313 43.5665 14.9106C43.8868 14.6899 44.2785 14.6012 44.6614 14.6626C56.6275 17.3179 65.0125 27.748 65.0494 40.0279C65.0646 43.4181 64.413 46.7774 63.1323 49.9109C61.8517 53.0444 59.9676 55.8896 57.5896 58.2811C55.179 60.7349 52.3097 62.6801 49.1486 64.0036C45.9874 65.327 42.5974 66.0022 39.1757 65.9901Z" fill="#082F5E"></path>
                </g>
                <g id="moontech">
                    <path id="Vector_4" d="M112.812 40.616C112.837 40.2583 112.752 39.9015 112.566 39.5956C112.418 39.2751 112.203 38.9907 111.937 38.7617C111.656 38.5154 111.336 38.3175 110.992 38.1758C110.613 38.0248 110.209 37.9502 109.802 37.9563C109.269 37.9564 108.74 38.0303 108.227 38.1758C107.732 38.323 107.251 38.5193 106.794 38.7617V49.6965C106.796 49.9143 106.751 50.1299 106.66 50.3274C106.569 50.5249 106.435 50.6993 106.268 50.8376C105.907 51.1528 105.442 51.3189 104.965 51.3028C104.503 51.3128 104.053 51.1467 103.706 50.8376C103.539 50.6993 103.405 50.5249 103.315 50.3274C103.224 50.1299 103.178 49.9143 103.18 49.6965V40.221C103.215 39.8367 103.14 39.4504 102.963 39.1084C102.837 38.8144 102.613 38.5739 102.331 38.4281C102.048 38.2416 101.725 38.1251 101.389 38.088C101.032 38.0059 100.668 37.9646 100.303 37.9651C99.7649 37.9622 99.2275 37.993 98.6934 38.0573C98.1724 38.131 97.6577 38.2447 97.1537 38.3974V49.7031C97.1562 49.9209 97.1103 50.1365 97.0194 50.334C96.9284 50.5315 96.7947 50.7058 96.6281 50.8442C96.2814 51.1528 95.8327 51.3188 95.3707 51.3094C94.8953 51.3168 94.433 51.1518 94.0677 50.8442C93.9014 50.7057 93.7681 50.5313 93.6775 50.3338C93.5869 50.1363 93.5414 49.9207 93.5443 49.7031V37.8115C93.5285 37.6093 93.5544 37.4059 93.6206 37.2143C93.6868 37.0228 93.7917 36.8473 93.9287 36.6989C94.2143 36.3464 94.5898 36.0793 95.0146 35.9265C95.8983 35.6039 96.8133 35.3766 97.7444 35.2484C98.7028 35.0794 99.6753 35.0059 100.648 35.029C101.448 35.0039 102.247 35.1121 103.013 35.3494C103.704 35.527 104.35 35.8534 104.905 36.3061C105.629 35.8936 106.406 35.5821 107.213 35.3801C108.053 35.1328 108.927 35.0181 109.802 35.04C110.697 35.0121 111.589 35.1612 112.427 35.4788C113.2 35.7484 113.912 36.1681 114.525 36.7143C115.116 37.2179 115.583 37.8525 115.891 38.5686C116.241 39.2888 116.421 40.0813 116.417 40.8837V49.7184C116.419 49.9363 116.373 50.1519 116.282 50.3494C116.191 50.5469 116.058 50.7212 115.891 50.8595C115.53 51.1747 115.065 51.3408 114.588 51.3247C114.125 51.3347 113.676 51.1687 113.329 50.8595C113.162 50.7215 113.028 50.5472 112.937 50.3497C112.846 50.1521 112.8 49.9363 112.803 49.7184L112.812 40.616Z" fill="#082F5E"></path>
                    <path id="Vector_5" d="M134.75 44.8227C134.75 46.7582 134.074 48.3228 132.72 49.5165C131.391 50.7132 129.618 51.3108 127.401 51.3094C125.23 51.3094 123.458 50.7118 122.085 49.5165C120.753 48.3228 120.076 46.7582 120.054 44.8227V41.5179C120.076 39.5619 120.753 37.9973 122.085 36.824C123.459 35.6288 125.231 35.0312 127.401 35.0312C129.618 35.0312 131.391 35.6288 132.72 36.824C134.074 37.9944 134.75 39.559 134.75 41.5179V44.8227ZM131.145 41.2743C131.17 40.8292 131.095 40.3841 130.925 39.9725C130.756 39.5609 130.496 39.1935 130.166 38.8978C129.513 38.2789 128.591 37.9695 127.401 37.9695C126.211 37.9695 125.29 38.2577 124.637 38.8341C123.985 39.4105 123.659 40.2239 123.659 41.2743V45.1058C123.659 46.1547 123.985 46.9593 124.637 47.5196C125.288 48.0799 126.21 48.3689 127.401 48.3864C128.591 48.3864 129.513 48.1077 130.166 47.5503C130.819 46.993 131.145 46.1803 131.145 45.1123V41.2743Z" fill="#082F5E"></path>
                    <path id="Vector_6" d="M152.593 44.8227C152.593 46.7582 151.917 48.3228 150.565 49.5165C149.236 50.7132 147.463 51.3108 145.246 51.3094C143.075 51.3094 141.302 50.7118 139.928 49.5165C138.599 48.3228 137.923 46.7582 137.899 44.8227V41.5179C137.921 39.5619 138.597 37.9973 139.928 36.824C141.305 35.6288 143.077 35.0312 145.246 35.0312C147.461 35.0312 149.234 35.6288 150.565 36.824C151.919 37.9944 152.595 39.559 152.593 41.5179V44.8227ZM148.99 41.2743C149.015 40.8292 148.939 40.3843 148.77 39.9728C148.6 39.5613 148.341 39.1938 148.011 38.8978C147.358 38.2789 146.436 37.9695 145.246 37.9695C144.056 37.9695 143.135 38.2577 142.482 38.8341C141.829 39.4105 141.502 40.2239 141.502 41.2743V45.1058C141.502 46.1547 141.829 46.9593 142.482 47.5196C143.135 48.0799 144.057 48.3652 145.248 48.3754C146.439 48.3754 147.36 48.0967 148.013 47.5394C148.666 46.982 148.993 46.1693 148.993 45.1014L148.99 41.2743Z" fill="#082F5E"></path>
                    <path id="Vector_7" d="M166.8 40.9605C166.822 40.0345 166.533 39.303 165.932 38.7661C165.331 38.2292 164.479 37.9615 163.376 37.9629C162.839 37.9629 162.268 37.9958 161.662 38.0551C161.096 38.1186 160.535 38.222 159.983 38.3645V49.7009C159.986 49.9187 159.94 50.1343 159.849 50.3318C159.758 50.5293 159.624 50.7036 159.458 50.842C159.111 51.1511 158.661 51.3171 158.198 51.3072C157.723 51.3152 157.26 51.1501 156.895 50.842C156.729 50.7036 156.595 50.5293 156.504 50.3318C156.413 50.1343 156.367 49.9187 156.37 49.7009V37.7193C156.366 37.2992 156.515 36.8922 156.789 36.576C157.067 36.2065 157.463 35.9447 157.909 35.8343C159.675 35.2759 161.517 35.0048 163.367 35.0312C165.491 35.0122 167.183 35.5886 168.442 36.7604C169.066 37.3159 169.563 38.0009 169.901 38.7686C170.238 39.5363 170.407 40.3686 170.397 41.2085V49.7031C170.399 49.9209 170.353 50.1365 170.262 50.334C170.171 50.5315 170.038 50.7058 169.871 50.8441C169.51 51.1593 169.045 51.3255 168.568 51.3094C168.106 51.3189 167.656 51.1529 167.309 50.8441C167.142 50.7057 167.009 50.5313 166.918 50.3338C166.828 50.1363 166.782 49.9207 166.785 49.7031L166.8 40.9605Z" fill="#082F5E"></path>
                    <path id="Vector_8" d="M174.671 30.6445C174.668 30.4267 174.714 30.2111 174.805 30.0136C174.896 29.8161 175.03 29.6417 175.196 29.5034C175.562 29.1963 176.024 29.032 176.499 29.0404C176.962 29.0296 177.411 29.1949 177.759 29.5034C177.925 29.6417 178.059 29.8161 178.15 30.0136C178.241 30.2111 178.287 30.4267 178.284 30.6445V35.3494H181.679C181.914 35.332 182.15 35.3618 182.374 35.4371C182.597 35.5124 182.804 35.6318 182.982 35.7882C183.147 35.9149 183.28 36.0786 183.371 36.2665C183.461 36.4543 183.508 36.661 183.505 36.8701C183.522 37.0817 183.486 37.2941 183.401 37.488C183.315 37.6819 183.183 37.8512 183.017 37.9805C182.639 38.2815 182.168 38.4371 181.688 38.4194H178.276V46.4816C178.259 46.9845 178.42 47.477 178.73 47.8707C178.877 48.0328 179.055 48.1631 179.254 48.2536C179.453 48.3442 179.667 48.3931 179.885 48.3974C180.165 48.3754 180.376 48.3666 180.515 48.3666C180.654 48.3666 180.819 48.325 180.936 48.303C181.053 48.2811 181.203 48.2328 181.321 48.2108C181.452 48.151 181.597 48.1297 181.74 48.1494C182.168 48.1245 182.59 48.2561 182.93 48.5203C183.112 48.639 183.26 48.8046 183.358 49.0001C183.456 49.1957 183.501 49.414 183.488 49.6328C183.499 49.819 183.466 50.0051 183.394 50.1765C183.321 50.3479 183.21 50.4998 183.069 50.6203C182.756 50.9043 182.367 51.087 181.95 51.1448C181.269 51.2699 180.578 51.3323 179.885 51.3313C179.195 51.3326 178.509 51.2176 177.857 50.9912C177.253 50.7676 176.696 50.4327 176.213 50.0037C175.735 49.5872 175.352 49.0705 175.092 48.4895C174.811 47.8699 174.668 47.196 174.671 46.5146V30.6445Z" fill="#082F5E"></path>
                    <path id="Vector_9" d="M189.334 44.6668C189.324 45.1983 189.383 45.7288 189.51 46.2446C189.636 46.6266 189.812 46.9897 190.034 47.3243C190.642 48.0031 191.54 48.3535 192.729 48.3754C193.377 48.3976 194.025 48.3237 194.653 48.156C195.283 47.9694 195.899 47.7763 196.507 47.5701C196.742 47.4758 196.991 47.4231 197.244 47.4143C197.458 47.399 197.673 47.4266 197.877 47.4956C198.081 47.5645 198.269 47.6733 198.432 47.8158C198.597 47.9345 198.732 48.0923 198.823 48.2755C198.915 48.4587 198.961 48.6617 198.957 48.867C198.956 49.1493 198.881 49.4264 198.74 49.6701C198.576 49.9371 198.331 50.1428 198.041 50.256C196.355 50.9622 194.547 51.3196 192.722 51.3071C190.669 51.3071 188.978 50.7307 187.649 49.5779C186.389 48.4237 185.748 46.9307 185.725 45.0991V41.2084C185.747 39.3564 186.388 37.8737 187.649 36.7604C188.978 35.59 190.669 35.0136 192.722 35.0312C194.843 35.0121 196.534 35.5885 197.795 36.7604C198.404 37.3001 198.893 37.9633 199.231 38.7068C199.589 39.4904 199.768 40.3454 199.754 41.2084V42.6611C199.751 42.9322 199.69 43.1994 199.576 43.4445C199.461 43.6896 199.295 43.9067 199.09 44.0809C198.635 44.4561 198.067 44.6628 197.48 44.6668H189.334ZM196.158 41.7351C196.182 39.2218 195.039 37.9651 192.729 37.9651C191.633 37.9651 190.793 38.2635 190.209 38.8604C189.626 39.4573 189.336 40.4155 189.341 41.7351H196.158Z" fill="#082F5E"></path>
                    <path id="Vector_10" d="M202.909 41.2085C202.931 39.3564 203.573 37.8737 204.834 36.7604C206.163 35.59 207.854 35.0136 209.907 35.0312C211.579 35.0053 213.237 35.342 214.769 36.0187C215.081 36.11 215.344 36.3211 215.503 36.6068C215.604 36.7191 215.681 36.8509 215.729 36.9943C215.778 37.1377 215.797 37.2896 215.786 37.4406C215.79 37.6379 215.748 37.8334 215.662 38.0109C215.577 38.1884 215.451 38.3427 215.295 38.461C214.955 38.7567 214.518 38.9133 214.07 38.8999C213.916 38.8978 213.763 38.8764 213.614 38.8363C213.499 38.7968 213.371 38.7551 213.229 38.7134C212.705 38.5039 212.167 38.3287 211.62 38.1889C211.06 38.0433 210.485 37.9696 209.907 37.9695C208.856 37.9505 208.027 38.208 207.422 38.7419C206.817 39.2759 206.514 40.0169 206.512 40.9649V45.3537C206.512 46.3017 206.802 47.0434 207.381 47.5789C208.011 48.0923 208.851 48.3498 209.9 48.3513C210.486 48.3489 211.069 48.2752 211.638 48.1318C212.21 47.9867 212.772 47.8012 213.318 47.5767C213.56 47.4662 213.823 47.4129 214.087 47.4209C214.297 47.4076 214.506 47.4363 214.705 47.5052C214.903 47.5741 215.086 47.6819 215.243 47.8224C215.407 47.949 215.541 48.1128 215.632 48.3006C215.723 48.4884 215.77 48.6951 215.768 48.9043C215.781 49.199 215.68 49.4872 215.486 49.7074C215.29 49.9803 215.024 50.1936 214.717 50.3241C213.191 50.9814 211.548 51.3182 209.889 51.3138C207.836 51.3138 206.145 50.7373 204.816 49.5845C203.557 48.4303 202.915 46.9373 202.892 45.1057L202.909 41.2085Z" fill="#082F5E"></path>
                    <path id="Vector_11" d="M229.361 40.9605C229.383 40.0344 229.093 39.303 228.492 38.7661C227.886 38.2306 227.033 37.9629 225.938 37.9629C224.719 37.9644 223.532 38.3537 222.544 39.0755V49.7009C222.547 49.9187 222.501 50.1343 222.41 50.3318C222.319 50.5293 222.185 50.7036 222.018 50.842C221.671 51.1511 221.222 51.3171 220.759 51.3072C220.283 51.3148 219.821 51.1497 219.456 50.842C219.289 50.7036 219.156 50.5293 219.065 50.3318C218.974 50.1343 218.928 49.9187 218.93 49.7009V30.6445C218.928 30.4267 218.974 30.2111 219.065 30.0136C219.156 29.8161 219.289 29.6417 219.456 29.5034C219.821 29.1963 220.284 29.032 220.759 29.0404C221.221 29.0296 221.671 29.1949 222.018 29.5034C222.185 29.6417 222.319 29.8161 222.41 30.0136C222.501 30.2111 222.547 30.4267 222.544 30.6445V35.8343C223.124 35.6015 223.721 35.4152 224.329 35.2769C224.931 35.1024 225.555 35.0196 226.182 35.0312C227.108 34.9924 228.034 35.1286 228.911 35.4328C229.71 35.6835 230.44 36.1168 231.046 36.6989C231.674 37.2322 232.166 37.9094 232.482 38.6739C232.815 39.4751 232.982 40.3372 232.97 41.2063V49.7009C232.973 49.9185 232.928 50.1341 232.837 50.3316C232.747 50.5291 232.613 50.7035 232.447 50.842C232.086 51.1562 231.621 51.3222 231.144 51.3072C230.681 51.3167 230.232 51.1507 229.884 50.842C229.718 50.7035 229.585 50.5291 229.494 50.3316C229.404 50.1341 229.358 49.9185 229.361 49.7009V40.9605Z" fill="#082F5E"></path>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_82_2">
                    <rect width="234.074" height="80" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}