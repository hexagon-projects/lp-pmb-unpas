import { useEffect, useState } from "react";
import ButtonHoverBaru from "../../components/buttonHoverBaru";
import Countdown from "../../components/Countdown";
import CTASection from "../../components/CTASection";
import SiapaSection from "../../components/SiapaSection";
import UserLayout from "../layouts/UserLayout";
import IdentityService from "../../fetching/identity";
import Check from "../../assets/icon/check.png"


import Bg1 from '../../assets/jalur/pmdk/1.png'
import Bg2 from '../../assets/jalur/pmdk/2.png'
import Bg3 from '../../assets/jalur/pmdk/3.png'
import Bg4 from '../../assets/jalur/utbk/4.png'
import Bg42 from '../../assets/jalur/pmdk/4.png'
import Bg5 from '../../assets/jalur/utbk/5.png'
import Icon1 from '../../assets/icon/1.png'
import Icon2 from '../../assets/icon/2.png'
import Icon3 from '../../assets/icon/3.png'
import Icon4 from '../../assets/icon/4.png'
import ods1 from '../../assets/jalur/ods/ods1.png'
import ods2 from '../../assets/jalur/ods/ods2.png'

import ODS2 from '../../assets/jalur/ods/2.png'
import ODS3 from '../../assets/jalur/ods/3.png'

const Ods = () => {
    const [loading, setLoading] = useState(true);
    const [identity, setIdentity] = useState(null);

    const Syarats = [
        {
            title: 'Daftar online lewat website resmi UNPAS atau langsung datang ke Kampus Tamansari',
            img: 'https://img.freepik.com/premium-photo/happy-young-asian-woman-is-smiling-while-holding-laptop-typing-report_216263-16485.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Upload dokumen yang dibutuhkan (rapor, ijazah, dll.)',
            img: 'https://img.freepik.com/premium-photo/hand-press-upload-button-keyboard_8595-351.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
        {
            title: 'Tunggu pengumuman yang akan keluar dalam waktu maksimal 1×24 jam',
            img: 'https://img.freepik.com/premium-photo/man-smiling-excited-while-holding-megaphone_524151-4477.jpg?uid=P165630701&ga=GA1.1.834055152.1736953083&semt=ais_hybrid&w=740'
        },
    ]


    const Unggulans = [
        {
            title: 'Lulusan SMA/MA/SMK/Sederajat'
        },
        {
            title: 'Punya dokumen lengkap & siap daftar'
        },
        {
            title: 'Mau langsung kuliah tanpa drama nunggu pengumuman lama'
        },
        {
            title: 'Tertarik pada prodi tertentu yang buka jalur ODS (cek daftar di website)'
        },
    ]

    const Keuntungans = [
        {
            title: 'Gak perlu ikut ujian lagi'
        },
        {
            title: 'Berlaku untuk semua jurusan kecuali Fakultas Kedokteran'
        },
        {
            title: 'Ada beasiswa DPP sampai 30% buat yang nilai rapornya mantap'
        },
        {
            title: 'Proses seleksi cepat & gak ribet'
        }
    ]



    const cards = [
        {
            icon: (
                // SVG 1
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3947_5535)">
                        <path d="M40.6641 6.14481V4.67548C40.6641 3.61461 40.2426 2.59719 39.4925 1.84705C38.7423 1.0969 37.7249 0.675476 36.6641 0.675476H9.9974C8.93653 0.675476 7.91911 1.0969 7.16897 1.84705C6.41882 2.59719 5.9974 3.61461 5.9974 4.67548V6.14481C4.49203 6.45209 3.13899 7.2699 2.16716 8.45991C1.19533 9.64991 0.664363 11.1391 0.664062 12.6755V34.0088C0.664063 35.7769 1.36644 37.4726 2.61668 38.7229C3.86693 39.9731 5.56262 40.6755 7.33073 40.6755H15.8401L14.5067 43.3421H12.6641C12.3104 43.3421 11.9713 43.4826 11.7213 43.7327C11.4712 43.9827 11.3307 44.3219 11.3307 44.6755C11.3307 45.0291 11.4712 45.3682 11.7213 45.6183C11.9713 45.8683 12.3104 46.0088 12.6641 46.0088H33.9974C34.351 46.0088 34.6902 45.8683 34.9402 45.6183C35.1903 45.3682 35.3307 45.0291 35.3307 44.6755C35.3307 44.3219 35.1903 43.9827 34.9402 43.7327C34.6902 43.4826 34.351 43.3421 33.9974 43.3421H32.1547L30.8214 40.6755H39.3307C41.0988 40.6755 42.7945 39.9731 44.0448 38.7229C45.295 37.4726 45.9974 35.7769 45.9974 34.0088V12.6755C45.9971 11.1391 45.4661 9.64991 44.4943 8.45991C43.5225 7.2699 42.1694 6.45209 40.6641 6.14481ZM8.66406 4.67548C8.66406 4.32185 8.80454 3.98272 9.05459 3.73267C9.30464 3.48262 9.64377 3.34214 9.9974 3.34214H36.6641C37.0177 3.34214 37.3568 3.48262 37.6069 3.73267C37.8569 3.98272 37.9974 4.32185 37.9974 4.67548V10.0088C37.9974 10.3624 37.8569 10.7016 37.6069 10.9516C37.3568 11.2017 37.0177 11.3421 36.6641 11.3421H28.6641C28.3104 11.3421 27.9713 11.4826 27.7213 11.7327C27.4712 11.9827 27.3307 12.3219 27.3307 12.6755V14.3208L22.6827 11.5315C22.4761 11.4065 22.2389 11.341 21.9974 11.3421H9.9974C9.64377 11.3421 9.30464 11.2017 9.05459 10.9516C8.80454 10.7016 8.66406 10.3624 8.66406 10.0088V4.67548ZM3.33073 12.6755C3.33415 11.8511 3.59217 11.048 4.06951 10.3759C4.54685 9.70378 5.22018 9.19559 5.9974 8.92081V10.0088C5.9974 11.0697 6.41882 12.0871 7.16897 12.8372C7.91911 13.5874 8.93653 14.0088 9.9974 14.0088H21.6267L21.9974 14.2301V32.6755H19.3307C19.3315 31.5844 19.0644 30.5097 18.553 29.5459C18.0416 28.5821 17.3014 27.7585 16.3974 27.1475C17.1562 26.4068 17.677 25.4568 17.8933 24.4188C18.1095 23.3808 18.0115 22.3018 17.6117 21.3198C17.2118 20.3377 16.5283 19.4971 15.6485 18.9054C14.7687 18.3136 13.7324 17.9976 12.6721 17.9976C11.6117 17.9976 10.5755 18.3136 9.69562 18.9054C8.81578 19.4971 8.13229 20.3377 7.73245 21.3198C7.33261 22.3018 7.23458 23.3808 7.45086 24.4188C7.66715 25.4568 8.18795 26.4068 8.94673 27.1475C8.03979 27.7567 7.29647 28.5795 6.78218 29.5434C6.26789 30.5073 5.99839 31.5829 5.9974 32.6755H3.33073V12.6755ZM12.6641 28.6755C13.7249 28.6755 14.7423 29.0969 15.4925 29.847C16.2426 30.5972 16.6641 31.6146 16.6641 32.6755H8.66406C8.66406 31.6146 9.08549 30.5972 9.83564 29.847C10.5858 29.0969 11.6032 28.6755 12.6641 28.6755ZM9.9974 23.3421C9.9974 22.8147 10.1538 22.2992 10.4468 21.8606C10.7398 21.4221 11.1563 21.0803 11.6436 20.8785C12.1308 20.6766 12.667 20.6238 13.1843 20.7267C13.7016 20.8296 14.1767 21.0836 14.5497 21.4565C14.9226 21.8295 15.1766 22.3046 15.2795 22.8219C15.3824 23.3392 15.3296 23.8754 15.1277 24.3626C14.9259 24.8499 14.5841 25.2664 14.1456 25.5594C13.7071 25.8524 13.1915 26.0088 12.6641 26.0088C11.9568 26.0088 11.2785 25.7279 10.7784 25.2278C10.2783 24.7277 9.9974 24.0494 9.9974 23.3421ZM17.4881 43.3421L18.8214 40.6755H27.8401L29.1734 43.3421H17.4881ZM39.3307 38.0088H7.33073C6.50638 38.0054 5.70322 37.7474 5.03113 37.27C4.35904 36.7927 3.85084 36.1194 3.57606 35.3421H43.0854C42.8106 36.1194 42.3024 36.7927 41.6303 37.27C40.9582 37.7474 40.1551 38.0054 39.3307 38.0088ZM33.9974 28.6755C35.0583 28.6755 36.0757 29.0969 36.8258 29.847C37.576 30.5972 37.9974 31.6146 37.9974 32.6755H29.9974C29.9974 31.6146 30.4188 30.5972 31.169 29.847C31.9191 29.0969 32.9365 28.6755 33.9974 28.6755ZM31.3307 23.3421C31.3307 22.8147 31.4871 22.2992 31.7801 21.8606C32.0732 21.4221 32.4896 21.0803 32.9769 20.8785C33.4642 20.6766 34.0004 20.6238 34.5176 20.7267C35.0349 20.8296 35.5101 21.0836 35.883 21.4565C36.256 21.8295 36.5099 22.3046 36.6128 22.8219C36.7157 23.3392 36.6629 23.8754 36.4611 24.3626C36.2592 24.8499 35.9174 25.2664 35.4789 25.5594C35.0404 25.8524 34.5248 26.0088 33.9974 26.0088C33.2902 26.0088 32.6119 25.7279 32.1118 25.2278C31.6117 24.7277 31.3307 24.0494 31.3307 23.3421ZM43.3307 32.6755H40.6641C40.6648 31.5844 40.3978 30.5097 39.8863 29.5459C39.3749 28.5821 38.6347 27.7585 37.7307 27.1475C38.4895 26.4068 39.0103 25.4568 39.2266 24.4188C39.4429 23.3808 39.3449 22.3018 38.945 21.3198C38.5452 20.3377 37.8617 19.4971 36.9818 18.9054C36.102 18.3136 35.0657 17.9976 34.0054 17.9976C32.9451 17.9976 31.9088 18.3136 31.029 18.9054C30.1491 19.4971 29.4656 20.3377 29.0658 21.3198C28.6659 22.3018 28.5679 23.3808 28.7842 24.4188C29.0005 25.4568 29.5213 26.4068 30.2801 27.1475C29.3731 27.7567 28.6298 28.5795 28.1155 29.5434C27.6012 30.5073 27.3317 31.5829 27.3307 32.6755H24.6641V15.8301L27.9787 17.8195C28.1811 17.9407 28.412 18.0061 28.6479 18.009C28.8838 18.0119 29.1162 17.9521 29.3215 17.8358C29.5267 17.7195 29.6974 17.5508 29.8162 17.3469C29.9349 17.1431 29.9974 16.9114 29.9974 16.6755V14.0088H36.6641C37.7249 14.0088 38.7423 13.5874 39.4925 12.8372C40.2426 12.0871 40.6641 11.0697 40.6641 10.0088V8.92081C41.4413 9.19559 42.1146 9.70378 42.5919 10.3759C43.0693 11.048 43.3273 11.8511 43.3307 12.6755V32.6755ZM11.3307 7.34214C11.3307 6.98852 11.4712 6.64938 11.7213 6.39933C11.9713 6.14929 12.3104 6.00881 12.6641 6.00881H33.9974C34.351 6.00881 34.6902 6.14929 34.9402 6.39933C35.1903 6.64938 35.3307 6.98852 35.3307 7.34214C35.3307 7.69577 35.1903 8.0349 34.9402 8.28495C34.6902 8.535 34.351 8.67548 33.9974 8.67548H12.6641C12.3104 8.67548 11.9713 8.535 11.7213 8.28495C11.4712 8.0349 11.3307 7.69577 11.3307 7.34214Z" fill="url(#paint0_linear_3947_5535)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_3947_5535" x1="1.63802" y1="44.4977" x2="54.0489" y2="25.2926" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6549F6" />
                            <stop offset="0.79" stopColor="#FF611D" />
                        </linearGradient>
                        <clipPath id="clip0_3947_5535">
                            <rect width="46" height="46" fill="white" transform="translate(0 0.00878906)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Super Cepat",
            desc: "Gak perlu nunggu lama, hasil keluar dalam 1 hari"
        },
        {
            icon: (
                // SVG 2 (copy dari kode kamu di atas)
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.6655 39.3421C40.6655 39.6957 40.525 40.0349 40.275 40.2849C40.025 40.535 39.6858 40.6754 39.3322 40.6754H33.9989C33.6452 40.6754 33.3061 40.535 33.056 40.2849C32.806 40.0349 32.6655 39.6957 32.6655 39.3421C32.6655 38.9885 32.806 38.6493 33.056 38.3993C33.3061 38.1492 33.6452 38.0088 33.9989 38.0088H39.3322C39.6858 38.0088 40.025 38.1492 40.275 38.3993C40.525 38.6493 40.6655 38.9885 40.6655 39.3421ZM45.9989 39.3421C45.9989 41.1102 45.2965 42.8059 44.0462 44.0561C42.796 45.3064 41.1003 46.0088 39.3322 46.0088H7.33219C5.6812 46.0072 4.08952 45.3931 2.86535 44.2853C1.64118 43.1775 0.871612 41.6549 0.705656 40.0122C0.5397 38.3696 0.989162 36.7238 1.96701 35.3936C2.94487 34.0633 4.38154 33.1432 5.99886 32.8114V13.7794C6.00227 12.7199 6.42285 11.7044 7.16952 10.9528L16.2762 1.8461C16.6466 1.47385 17.0871 1.17872 17.5723 0.977786C18.0575 0.776847 18.5777 0.674081 19.1029 0.675428H27.5615C28.0867 0.674081 28.6069 0.776847 29.0921 0.977786C29.5772 1.17872 30.0178 1.47385 30.3882 1.8461L34.6122 6.07009C35.4907 6.20342 36.2994 6.62684 36.9095 7.27292C37.5196 7.91901 37.896 8.75063 37.9788 9.63538C38.0616 10.5201 37.8461 11.4071 37.3665 12.1552C36.8868 12.9033 36.1707 13.4694 35.3322 13.7634V14.6274L38.1455 16.4941C38.5106 16.7377 38.81 17.0676 39.017 17.4547C39.224 17.8417 39.3323 18.2738 39.3322 18.7128V20.6754C39.3322 21.0291 39.1917 21.3682 38.9417 21.6182C38.6916 21.8683 38.3525 22.0088 37.9989 22.0088C37.6452 22.0088 37.3061 21.8683 37.056 21.6182C36.806 21.3682 36.6655 21.0291 36.6655 20.6754V18.7234L33.9989 16.9448L31.3322 18.7234V20.6754C31.3322 21.0291 31.1917 21.3682 30.9417 21.6182C30.6916 21.8683 30.3525 22.0088 29.9989 22.0088C29.6452 22.0088 29.3061 21.8683 29.056 21.6182C28.806 21.3682 28.6655 21.0291 28.6655 20.6754V18.7234C28.6655 18.2845 28.7737 17.8524 28.9807 17.4653C29.1877 17.0783 29.4871 16.7484 29.8522 16.5048L32.6655 14.6274V13.7634C32.0539 13.5452 31.5046 13.1813 31.065 12.7032C30.6255 12.2251 30.309 11.6472 30.1429 11.0194L24.0095 8.97143L19.4389 18.1101L24.2922 32.6754H27.4682C27.3984 32.4589 27.3528 32.2353 27.3322 32.0088V28.0088C27.3336 27.1251 27.6852 26.2781 28.3101 25.6533C28.9349 25.0285 29.7819 24.6768 30.6655 24.6754H37.3322C38.2158 24.6768 39.0628 25.0285 39.6877 25.6533C40.3125 26.2781 40.6641 27.1251 40.6655 28.0088V32.0088C40.6465 32.2759 40.5927 32.5395 40.5055 32.7928C42.0435 33.0677 43.436 33.8741 44.44 35.0711C45.444 36.2681 45.9957 37.7798 45.9989 39.3421ZM32.6655 10.0088C32.6655 10.2725 32.7437 10.5303 32.8902 10.7495C33.0367 10.9688 33.245 11.1397 33.4886 11.2406C33.7322 11.3415 34.0003 11.3679 34.259 11.3165C34.5176 11.265 34.7552 11.138 34.9417 10.9516C35.1281 10.7651 35.2551 10.5275 35.3066 10.2689C35.358 10.0102 35.3316 9.74215 35.2307 9.49852C35.1298 9.25488 34.9589 9.04664 34.7396 8.90014C34.5203 8.75363 34.2626 8.67543 33.9989 8.67543C33.6452 8.67543 33.3061 8.8159 33.056 9.06595C32.806 9.316 32.6655 9.65514 32.6655 10.0088ZM29.9989 32.0088C29.9989 32.1856 30.0691 32.3551 30.1941 32.4802C30.3191 32.6052 30.4887 32.6754 30.6655 32.6754H37.3322C37.509 32.6754 37.6786 32.6052 37.8036 32.4802C37.9286 32.3551 37.9989 32.1856 37.9989 32.0088V28.0088C37.9989 27.832 37.9286 27.6624 37.8036 27.5374C37.6786 27.4123 37.509 27.3421 37.3322 27.3421H30.6655C30.4887 27.3421 30.3191 27.4123 30.1941 27.5374C30.0691 27.6624 29.9989 27.832 29.9989 28.0088V32.0088ZM26.5642 7.01409L30.4015 8.29143C30.6793 7.71562 31.0896 7.21389 31.5989 6.82743L28.5029 3.73143C28.3079 3.56991 28.0808 3.45167 27.8367 3.38455C27.5926 3.31743 27.337 3.30296 27.0869 3.34209C27.3132 3.94913 27.384 4.60319 27.2927 5.24459C27.2014 5.886 26.951 6.49433 26.5642 7.01409ZM21.9989 4.67543C21.9989 4.93914 22.0771 5.19692 22.2236 5.41619C22.3701 5.63545 22.5783 5.80635 22.8219 5.90727C23.0656 6.00818 23.3337 6.03459 23.5923 5.98314C23.851 5.93169 24.0885 5.80471 24.275 5.61824C24.4615 5.43177 24.5885 5.19419 24.6399 4.93555C24.6914 4.67691 24.6649 4.40882 24.564 4.16518C24.4631 3.92155 24.2922 3.71331 24.073 3.5668C23.8537 3.42029 23.5959 3.34209 23.3322 3.34209C22.9786 3.34209 22.6394 3.48257 22.3894 3.73262C22.1393 3.98267 21.9989 4.32181 21.9989 4.67543ZM9.97219 11.9234C11.4296 11.2699 13.0744 11.1662 14.6023 11.6314C16.1303 12.0966 17.4382 13.0993 18.2842 14.4541L21.4282 8.17143C20.5893 7.72483 19.9401 6.99017 19.6 6.10276C19.2599 5.21534 19.2519 4.23493 19.5775 3.34209C19.3274 3.30156 19.0714 3.31535 18.8271 3.38253C18.5828 3.44971 18.3558 3.56871 18.1615 3.73143L9.97219 11.9234ZM8.66552 18.0088C8.66552 18.7999 8.90012 19.5732 9.33964 20.231C9.77917 20.8888 10.4039 21.4015 11.1348 21.7043C11.8657 22.007 12.67 22.0862 13.4459 21.9319C14.2218 21.7776 14.9345 21.3966 15.4939 20.8372C16.0534 20.2778 16.4343 19.565 16.5887 18.7891C16.743 18.0132 16.6638 17.2089 16.361 16.478C16.0583 15.7471 15.5456 15.1224 14.8878 14.6829C14.23 14.2434 13.4566 14.0088 12.6655 14.0088C11.6047 14.0088 10.5872 14.4302 9.8371 15.1803C9.08695 15.9305 8.66552 16.9479 8.66552 18.0088ZM8.66552 32.6754H21.4815L17.9375 22.0408C17.4158 22.7379 16.7607 23.3243 16.0103 23.766C15.2599 24.2077 14.4292 24.4959 13.5665 24.6137C12.7038 24.7316 11.8262 24.6768 10.9849 24.4525C10.1435 24.2283 9.35513 23.839 8.66552 23.3074V32.6754ZM43.3322 39.3421C43.3322 38.2812 42.9108 37.2638 42.1606 36.5137C41.4105 35.7635 40.3931 35.3421 39.3322 35.3421H7.33219C6.27132 35.3421 5.25391 35.7635 4.50376 36.5137C3.75362 37.2638 3.33219 38.2812 3.33219 39.3421C3.33219 40.403 3.75362 41.4204 4.50376 42.1705C5.25391 42.9207 6.27132 43.3421 7.33219 43.3421H39.3322C40.3931 43.3421 41.4105 42.9207 42.1606 42.1705C42.9108 41.4204 43.3322 40.403 43.3322 39.3421ZM25.9989 38.0088H20.6655C20.3119 38.0088 19.9728 38.1492 19.7227 38.3993C19.4727 38.6493 19.3322 38.9885 19.3322 39.3421C19.3322 39.6957 19.4727 40.0349 19.7227 40.2849C19.9728 40.535 20.3119 40.6754 20.6655 40.6754H25.9989C26.3525 40.6754 26.6916 40.535 26.9417 40.2849C27.1917 40.0349 27.3322 39.6957 27.3322 39.3421C27.3322 38.9885 27.1917 38.6493 26.9417 38.3993C26.6916 38.1492 26.3525 38.0088 25.9989 38.0088ZM12.6655 38.0088H7.33219C6.97857 38.0088 6.63943 38.1492 6.38938 38.3993C6.13933 38.6493 5.99886 38.9885 5.99886 39.3421C5.99886 39.6957 6.13933 40.0349 6.38938 40.2849C6.63943 40.535 6.97857 40.6754 7.33219 40.6754H12.6655C13.0191 40.6754 13.3583 40.535 13.6083 40.2849C13.8584 40.0349 13.9989 39.6957 13.9989 39.3421C13.9989 38.9885 13.8584 38.6493 13.6083 38.3993C13.3583 38.1492 13.0191 38.0088 12.6655 38.0088Z" fill="url(#paint0_linear_3947_6451)" />
                    <defs>
                        <linearGradient id="paint0_linear_3947_6451" x1="1.6457" y1="44.4977" x2="54.051" y2="25.2973" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6549F6" />
                            <stop offset="0.79" stopColor="#FF611D" />
                        </linearGradient>
                    </defs>
                </svg>
            ),
            title: "100% Online",
            desc: "Bisa Daftar darimana aja dan kapan saja"
        },
        {
            icon: (
                // SVG 3 (copy dari kode kamu di atas)
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3947_6450)">
                        <path d="M40.6655 39.3421C40.6655 39.6957 40.525 40.0349 40.275 40.2849C40.025 40.535 39.6858 40.6754 39.3322 40.6754H33.9989C33.6452 40.6754 33.3061 40.535 33.056 40.2849C32.806 40.0349 32.6655 39.6957 32.6655 39.3421C32.6655 38.9885 32.806 38.6493 33.056 38.3993C33.3061 38.1492 33.6452 38.0088 33.9989 38.0088H39.3322C39.6858 38.0088 40.025 38.1492 40.275 38.3993C40.525 38.6493 40.6655 38.9885 40.6655 39.3421ZM45.9989 39.3421C45.9989 41.1102 45.2965 42.8059 44.0462 44.0561C42.796 45.3064 41.1003 46.0088 39.3322 46.0088H7.33219C5.6812 46.0072 4.08952 45.3931 2.86535 44.2853C1.64118 43.1775 0.871612 41.6549 0.705656 40.0122C0.5397 38.3696 0.989162 36.7238 1.96701 35.3936C2.94487 34.0633 4.38154 33.1432 5.99886 32.8114V13.7794C6.00227 12.7199 6.42285 11.7044 7.16952 10.9528L16.2762 1.8461C16.6466 1.47385 17.0871 1.17872 17.5723 0.977786C18.0575 0.776847 18.5777 0.674081 19.1029 0.675428H27.5615C28.0867 0.674081 28.6069 0.776847 29.0921 0.977786C29.5772 1.17872 30.0178 1.47385 30.3882 1.8461L34.6122 6.07009C35.4907 6.20342 36.2994 6.62684 36.9095 7.27292C37.5196 7.91901 37.896 8.75063 37.9788 9.63538C38.0616 10.5201 37.8461 11.4071 37.3665 12.1552C36.8868 12.9033 36.1707 13.4694 35.3322 13.7634V14.6274L38.1455 16.4941C38.5106 16.7377 38.81 17.0676 39.017 17.4547C39.224 17.8417 39.3323 18.2738 39.3322 18.7128V20.6754C39.3322 21.0291 39.1917 21.3682 38.9417 21.6182C38.6916 21.8683 38.3525 22.0088 37.9989 22.0088C37.6452 22.0088 37.3061 21.8683 37.056 21.6182C36.806 21.3682 36.6655 21.0291 36.6655 20.6754V18.7234L33.9989 16.9448L31.3322 18.7234V20.6754C31.3322 21.0291 31.1917 21.3682 30.9417 21.6182C30.6916 21.8683 30.3525 22.0088 29.9989 22.0088C29.6452 22.0088 29.3061 21.8683 29.056 21.6182C28.806 21.3682 28.6655 21.0291 28.6655 20.6754V18.7234C28.6655 18.2845 28.7737 17.8524 28.9807 17.4653C29.1877 17.0783 29.4871 16.7484 29.8522 16.5048L32.6655 14.6274V13.7634C32.0539 13.5452 31.5046 13.1813 31.065 12.7032C30.6255 12.2251 30.309 11.6472 30.1429 11.0194L24.0095 8.97143L19.4389 18.1101L24.2922 32.6754H27.4682C27.3984 32.4589 27.3528 32.2353 27.3322 32.0088V28.0088C27.3336 27.1251 27.6852 26.2781 28.3101 25.6533C28.9349 25.0285 29.7819 24.6768 30.6655 24.6754H37.3322C38.2158 24.6768 39.0628 25.0285 39.6877 25.6533C40.3125 26.2781 40.6641 27.1251 40.6655 28.0088V32.0088C40.6465 32.2759 40.5927 32.5395 40.5055 32.7928C42.0435 33.0677 43.436 33.8741 44.44 35.0711C45.444 36.2681 45.9957 37.7798 45.9989 39.3421ZM32.6655 10.0088C32.6655 10.2725 32.7437 10.5303 32.8902 10.7495C33.0367 10.9688 33.245 11.1397 33.4886 11.2406C33.7322 11.3415 34.0003 11.3679 34.259 11.3165C34.5176 11.265 34.7552 11.138 34.9417 10.9516C35.1281 10.7651 35.2551 10.5275 35.3066 10.2689C35.358 10.0102 35.3316 9.74215 35.2307 9.49852C35.1298 9.25488 34.9589 9.04664 34.7396 8.90014C34.5203 8.75363 34.2626 8.67543 33.9989 8.67543C33.6452 8.67543 33.3061 8.8159 33.056 9.06595C32.806 9.316 32.6655 9.65514 32.6655 10.0088ZM29.9989 32.0088C29.9989 32.1856 30.0691 32.3551 30.1941 32.4802C30.3191 32.6052 30.4887 32.6754 30.6655 32.6754H37.3322C37.509 32.6754 37.6786 32.6052 37.8036 32.4802C37.9286 32.3551 37.9989 32.1856 37.9989 32.0088V28.0088C37.9989 27.832 37.9286 27.6624 37.8036 27.5374C37.6786 27.4123 37.509 27.3421 37.3322 27.3421H30.6655C30.4887 27.3421 30.3191 27.4123 30.1941 27.5374C30.0691 27.6624 29.9989 27.832 29.9989 28.0088V32.0088ZM26.5642 7.01409L30.4015 8.29143C30.6793 7.71562 31.0896 7.21389 31.5989 6.82743L28.5029 3.73143C28.3079 3.56991 28.0808 3.45167 27.8367 3.38455C27.5926 3.31743 27.337 3.30296 27.0869 3.34209C27.3132 3.94913 27.384 4.60319 27.2927 5.24459C27.2014 5.886 26.951 6.49433 26.5642 7.01409ZM21.9989 4.67543C21.9989 4.93914 22.0771 5.19692 22.2236 5.41619C22.3701 5.63545 22.5783 5.80635 22.8219 5.90727C23.0656 6.00818 23.3337 6.03459 23.5923 5.98314C23.851 5.93169 24.0885 5.80471 24.275 5.61824C24.4615 5.43177 24.5885 5.19419 24.6399 4.93555C24.6914 4.67691 24.6649 4.40882 24.564 4.16518C24.4631 3.92155 24.2922 3.71331 24.073 3.5668C23.8537 3.42029 23.5959 3.34209 23.3322 3.34209C22.9786 3.34209 22.6394 3.48257 22.3894 3.73262C22.1393 3.98267 21.9989 4.32181 21.9989 4.67543ZM9.97219 11.9234C11.4296 11.2699 13.0744 11.1662 14.6023 11.6314C16.1303 12.0966 17.4382 13.0993 18.2842 14.4541L21.4282 8.17143C20.5893 7.72483 19.9401 6.99017 19.6 6.10276C19.2599 5.21534 19.2519 4.23493 19.5775 3.34209C19.3274 3.30156 19.0714 3.31535 18.8271 3.38253C18.5828 3.44971 18.3558 3.56871 18.1615 3.73143L9.97219 11.9234ZM8.66552 18.0088C8.66552 18.7999 8.90012 19.5732 9.33964 20.231C9.77917 20.8888 10.4039 21.4015 11.1348 21.7043C11.8657 22.007 12.67 22.0862 13.4459 21.9319C14.2218 21.7776 14.9345 21.3966 15.4939 20.8372C16.0534 20.2778 16.4343 19.565 16.5887 18.7891C16.743 18.0132 16.6638 17.2089 16.361 16.478C16.0583 15.7471 15.5456 15.1224 14.8878 14.6829C14.23 14.2434 13.4566 14.0088 12.6655 14.0088C11.6047 14.0088 10.5872 14.4302 9.8371 15.1803C9.08695 15.9305 8.66552 16.9479 8.66552 18.0088ZM8.66552 32.6754H21.4815L17.9375 22.0408C17.4158 22.7379 16.7607 23.3243 16.0103 23.766C15.2599 24.2077 14.4292 24.4959 13.5665 24.6137C12.7038 24.7316 11.8262 24.6768 10.9849 24.4525C10.1435 24.2283 9.35513 23.839 8.66552 23.3074V32.6754ZM43.3322 39.3421C43.3322 38.2812 42.9108 37.2638 42.1606 36.5137C41.4105 35.7635 40.3931 35.3421 39.3322 35.3421H7.33219C6.27132 35.3421 5.25391 35.7635 4.50376 36.5137C3.75362 37.2638 3.33219 38.2812 3.33219 39.3421C3.33219 40.403 3.75362 41.4204 4.50376 42.1705C5.25391 42.9207 6.27132 43.3421 7.33219 43.3421H39.3322C40.3931 43.3421 41.4105 42.9207 42.1606 42.1705C42.9108 41.4204 43.3322 40.403 43.3322 39.3421ZM25.9989 38.0088H20.6655C20.3119 38.0088 19.9728 38.1492 19.7227 38.3993C19.4727 38.6493 19.3322 38.9885 19.3322 39.3421C19.3322 39.6957 19.4727 40.0349 19.7227 40.2849C19.9728 40.535 20.3119 40.6754 20.6655 40.6754H25.9989C26.3525 40.6754 26.6916 40.535 26.9417 40.2849C27.1917 40.0349 27.3322 39.6957 27.3322 39.3421C27.3322 38.9885 27.1917 38.6493 26.9417 38.3993C26.6916 38.1492 26.3525 38.0088 25.9989 38.0088ZM12.6655 38.0088H7.33219C6.97857 38.0088 6.63943 38.1492 6.38938 38.3993C6.13933 38.6493 5.99886 38.9885 5.99886 39.3421C5.99886 39.6957 6.13933 40.0349 6.38938 40.2849C6.63943 40.535 6.97857 40.6754 7.33219 40.6754H12.6655C13.0191 40.6754 13.3583 40.535 13.6083 40.2849C13.8584 40.0349 13.9989 39.6957 13.9989 39.3421C13.9989 38.9885 13.8584 38.6493 13.6083 38.3993C13.3583 38.1492 13.0191 38.0088 12.6655 38.0088Z" fill="url(#paint0_linear_3947_6450)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_3947_6450" x1="1.6457" y1="44.4977" x2="54.051" y2="25.2973" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#6549F6" />
                            <stop offset="0.79" stopColor="#FF611D" />
                        </linearGradient>
                        <clipPath id="clip0_3947_6450">
                            <rect width="46" height="46" fill="white" transform="translate(0 0.00878906)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Tanpa Test",
            desc: "Seleksi cukup dari kelengkapan dokumen aja"
        }
    ];
    const CardSection = () => (
        <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
            <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/4 mx-auto">
                Keuntungan Jalur ODS
            </h2>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 justify-items-center">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="card-gradient-border group relative w-full max-w-[400px] h-[303px] py-6 px-6 md:px-10 lg:py-12 lg:px-20 hover:-translate-y-2 transition-all duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl rounded-[16px] md:rounded-[24px] lg:rounded-[32px] flex justify-center items-center flex-col"
                    >
                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col gap-8 items-center text-center justify-center ">
                            <div>{card.icon}</div>
                            <div>
                                <h2 className="font-semibold text-xl mb-2">{card.title}</h2>
                                <h2 className="text-base">{card.desc}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );




    useEffect(() => {
        const fetchIdentity = async () => {
            try {
                const response = await IdentityService.getAllIdentities();
                if (response.length > 0) {
                    setIdentity(response[0]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching identity:", error);
                setLoading(false);
            }
        };

        fetchIdentity();
    }, []);

    const handleWhatsApp = () => {
        if (identity?.phone) {
            window.location.href = `https://wa.me/${identity.phone}`;
        } else {
            alert("Nomor WhatsApp admin tidak tersedia.");
        }
    };

    const handleClick = (url) => {
        window.location.href = url;
    };

    if (loading) {
        return (
            <UserLayout>
                <div className="flex justify-center items-center h-screen">
                    <p>Memuat data...</p>
                </div>
            </UserLayout>
        );
    }

    return (
        <UserLayout
            bgLayoutColor="bg-[#F3F4F4]"
            bgColor={"bg-[#F3F3F3]"}
            position={"fixed"}
            margin={""}
            titleColor={"text-black"}
            paddingDekstop={"md:py-3 md:px-3 lg:py-6 lg:px-6"}
            paddingTop={"lg:pt-30"}
            type={"fadeInUp"}
            duration={0.5}
            display={'hidden'}
            bottomMobile={'bottom-6'}
            marginMobile={'m-0'}
        >
            {/* HeroSection */}
            <div className='px-[20px] py-[40px] md:p-[40px] lg:px-[60px] lg:py-[30px] flex flex-col md:flex-row justify-center items-center md:justify-between gap-4 md:gap-6 lg:gap-8'>
                {/* Tablet & Dekstop  */}
                <div className="w-full md:w-1/2 h-full cta_container hidden md:block">
                    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left bg-white md:px-10 md:py-20 lg:px-16 lg:py-32 jalur-box">
                        <h1 className="text-[30px] md:text-[38px] lg:text-[48px] leading-[72px]">Masuk UNPAS Gak Pake Lama, Butuh 1 Hari Aja Resmi Jadi Mahasiswa!!</h1>

                        <div className="grid grid-cols-2 gap-4 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                width={'full'}
                                text="Daftar"
                                onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                                bgColor="#FEF251"
                                hoverColor="#D1C300"
                                borderColor="#C73929"
                                textColor="black"
                                textHoverColor="black"
                            />
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                text="Hubungi Admin"
                                onClick={handleWhatsApp}
                                hoverColor="#034833"
                                borderColor="#034833"
                                textColor="black"
                                textHoverColor="white"
                            />
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center items-center md:justify-start md:items-start text-center md:text-left md:hidden">

                    <h1 className="text-[30px] md:text-[38px] lg:text-[48px]">Masuk UNPAS Gak Pake Lama, Butuh 1 Hari Aja Resmi Jadi Mahasiswa!!</h1>
                    <div className="grid grid-cols-2 gap-4 md:gap-4 w-4/5 md:w-full lg:w-4/5 xl:w-1/2">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                        />
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Hubungi Admin"
                            onClick={handleWhatsApp}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={ods2} alt="" className="w-full h-full object-cover " />
                </div>
            </div>


            {/* AboutSection */}
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8 lg:gap-32">
                <div className="w-full md:w-1/2">
                    <img src={ods1} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 md:gap-10 lg:gap-12">
                    {/* <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold">Apa Itu Jalur PMDK Akademik?</h2> */}
                    <p className="text-[18px] md:text-[22px] lg:text-[26px]">Jalur <span className="font-bold">One Day Service (ODS)</span> adalah pilihan masuk UNPAS yang super cepat dan praktis! Kamu bisa daftar dan dapat hasil kelulusan dalam waktu <span className="font-bold"> 1 x 24 jam</span>, cukup lewat website resmi UNPAS atau datang langsung ke Kampus Tamansari.</p>
                    <div className="w-full md:w-1/2 lg:w-5/6 grid grid-cols-2 gap-2 md:gap-4">
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            width={'full'}
                            text="Daftar"
                            onClick={() => handleClick(`https://registrasi.unpas.ac.id/register?jalur=rpl`)}
                            bgColor="#FEF251"
                            hoverColor="#D1C300"
                            borderColor="#C73929"
                            textColor="black"
                            textHoverColor="black"
                        />
                        <ButtonHoverBaru
                            rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                            text="Hubungi Admin"
                            onClick={handleWhatsApp}
                            hoverColor="#034833"
                            borderColor="#034833"
                            textColor="black"
                            textHoverColor="white"
                        />
                    </div>
                </div>
            </div>


            {/* NilaiSection */}
            <div className="px-[0px] py-[40px] md:p-[40px] lg:px-[34px] lg:py-[60px] cta_container">
                <div className="px-[40px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[120px] bg-[#985534] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6 lg:gap-28 nilai-box">
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-10 lg:space-y-12">
                        <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold  text-white">Cocok Buat Siapa?</h2>
                        <div className="flex flex-col justify-between">
                            {Unggulans.map((item, index) => (
                                <div key={index} className="py-5 border-b border-black flex justify-between items-center gap-4">
                                    <p className="text-[14px] md:text-[16px] lg:text-[20px] text-white">{item.title}</p>
                                    <div className="w-[30px] h-[30px] rounded-full bg-white p-4 flex justify-center items-center">
                                        <p className="font-bold">-</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
                            <ButtonHoverBaru
                                rounded="rounded-lg sm:rounded-xl md:rounded-2xl"
                                text="Hubungi Admin"
                                onClick={handleWhatsApp}
                                bgColor={'none'}
                                hoverColor="#ffffff"
                                borderColor="#ffffff"
                                textColor="white"
                                textHoverColor="black"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-full">
                        <img src={ODS3} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <svg style={{ visibility: "hidden", position: "absolute" }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>


            <SiapaSection data={Syarats} title="Gimana Prosesnya" />

            {/* SiapaSection
            <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-20 hidden md:block lg:block">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Siapa Yang Bisa Daftar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 cta_container">
                    {Syarats.map((item, index) => (
                        <div key={index} className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-black group text-white siapa-box">
                            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                                <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                            </div>
                            <p className="text-[20px] md:text-[24px] lg:text-[28px]">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* SiapaSectionMobile
              <div className="px-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-20 block md:hidden lg:hidden">
                <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Siapa Yang Bisa Daftar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 ">
                    {Syarats.map((item, index) => (
                        <div key={index} className="h-[30vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-between items-start p-5 md:gap-7 lg:p-10 bg-gradient-to-b from-[#985534] via-[#985534] to-black group text-white rounded-3xl ">
                            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 p-2 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/20 transition duration-500">
                                <img src={Check} alt="" className="w-12 h-12 md:w-16 md:h-16 lg:w-8 lg:h-8 object-contain" />
                            </div>
                            <p className="text-[20px] md:text-[24px] lg:text-[28px]">{item.title}</p>
                        </div>
                    ))}
                </div>
        /}
        



            {/* DokumenSection */}
            {/* <div className="p x-[20px] py-[40px] md:p-[40px] lg:px-[160px] lg:py-[60px] space-y-6 md:space-y-12 lg:space-y-16">
    <h2 className="text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center max-w-[80%] md:max-w-1/2 xl:max-w-1/3 mx-auto">Keuntungan Jalur ODS</h2>

                <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <div className="w-[400px] h-[303px] bg-white py-6 px-10 lg:py-12 lg:px-20 hover:-translate-y-2 transition-all duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] flex justify-between items-center flex-col ">
                        <div><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3947_5535)">
                                <path d="M40.6641 6.14481V4.67548C40.6641 3.61461 40.2426 2.59719 39.4925 1.84705C38.7423 1.0969 37.7249 0.675476 36.6641 0.675476H9.9974C8.93653 0.675476 7.91911 1.0969 7.16897 1.84705C6.41882 2.59719 5.9974 3.61461 5.9974 4.67548V6.14481C4.49203 6.45209 3.13899 7.2699 2.16716 8.45991C1.19533 9.64991 0.664363 11.1391 0.664062 12.6755V34.0088C0.664063 35.7769 1.36644 37.4726 2.61668 38.7229C3.86693 39.9731 5.56262 40.6755 7.33073 40.6755H15.8401L14.5067 43.3421H12.6641C12.3104 43.3421 11.9713 43.4826 11.7213 43.7327C11.4712 43.9827 11.3307 44.3219 11.3307 44.6755C11.3307 45.0291 11.4712 45.3682 11.7213 45.6183C11.9713 45.8683 12.3104 46.0088 12.6641 46.0088H33.9974C34.351 46.0088 34.6902 45.8683 34.9402 45.6183C35.1903 45.3682 35.3307 45.0291 35.3307 44.6755C35.3307 44.3219 35.1903 43.9827 34.9402 43.7327C34.6902 43.4826 34.351 43.3421 33.9974 43.3421H32.1547L30.8214 40.6755H39.3307C41.0988 40.6755 42.7945 39.9731 44.0448 38.7229C45.295 37.4726 45.9974 35.7769 45.9974 34.0088V12.6755C45.9971 11.1391 45.4661 9.64991 44.4943 8.45991C43.5225 7.2699 42.1694 6.45209 40.6641 6.14481ZM8.66406 4.67548C8.66406 4.32185 8.80454 3.98272 9.05459 3.73267C9.30464 3.48262 9.64377 3.34214 9.9974 3.34214H36.6641C37.0177 3.34214 37.3568 3.48262 37.6069 3.73267C37.8569 3.98272 37.9974 4.32185 37.9974 4.67548V10.0088C37.9974 10.3624 37.8569 10.7016 37.6069 10.9516C37.3568 11.2017 37.0177 11.3421 36.6641 11.3421H28.6641C28.3104 11.3421 27.9713 11.4826 27.7213 11.7327C27.4712 11.9827 27.3307 12.3219 27.3307 12.6755V14.3208L22.6827 11.5315C22.4761 11.4065 22.2389 11.341 21.9974 11.3421H9.9974C9.64377 11.3421 9.30464 11.2017 9.05459 10.9516C8.80454 10.7016 8.66406 10.3624 8.66406 10.0088V4.67548ZM3.33073 12.6755C3.33415 11.8511 3.59217 11.048 4.06951 10.3759C4.54685 9.70378 5.22018 9.19559 5.9974 8.92081V10.0088C5.9974 11.0697 6.41882 12.0871 7.16897 12.8372C7.91911 13.5874 8.93653 14.0088 9.9974 14.0088H21.6267L21.9974 14.2301V32.6755H19.3307C19.3315 31.5844 19.0644 30.5097 18.553 29.5459C18.0416 28.5821 17.3014 27.7585 16.3974 27.1475C17.1562 26.4068 17.677 25.4568 17.8933 24.4188C18.1095 23.3808 18.0115 22.3018 17.6117 21.3198C17.2118 20.3377 16.5283 19.4971 15.6485 18.9054C14.7687 18.3136 13.7324 17.9976 12.6721 17.9976C11.6117 17.9976 10.5755 18.3136 9.69562 18.9054C8.81578 19.4971 8.13229 20.3377 7.73245 21.3198C7.33261 22.3018 7.23458 23.3808 7.45086 24.4188C7.66715 25.4568 8.18795 26.4068 8.94673 27.1475C8.03979 27.7567 7.29647 28.5795 6.78218 29.5434C6.26789 30.5073 5.99839 31.5829 5.9974 32.6755H3.33073V12.6755ZM12.6641 28.6755C13.7249 28.6755 14.7423 29.0969 15.4925 29.847C16.2426 30.5972 16.6641 31.6146 16.6641 32.6755H8.66406C8.66406 31.6146 9.08549 30.5972 9.83564 29.847C10.5858 29.0969 11.6032 28.6755 12.6641 28.6755ZM9.9974 23.3421C9.9974 22.8147 10.1538 22.2992 10.4468 21.8606C10.7398 21.4221 11.1563 21.0803 11.6436 20.8785C12.1308 20.6766 12.667 20.6238 13.1843 20.7267C13.7016 20.8296 14.1767 21.0836 14.5497 21.4565C14.9226 21.8295 15.1766 22.3046 15.2795 22.8219C15.3824 23.3392 15.3296 23.8754 15.1277 24.3626C14.9259 24.8499 14.5841 25.2664 14.1456 25.5594C13.7071 25.8524 13.1915 26.0088 12.6641 26.0088C11.9568 26.0088 11.2785 25.7279 10.7784 25.2278C10.2783 24.7277 9.9974 24.0494 9.9974 23.3421ZM17.4881 43.3421L18.8214 40.6755H27.8401L29.1734 43.3421H17.4881ZM39.3307 38.0088H7.33073C6.50638 38.0054 5.70322 37.7474 5.03113 37.27C4.35904 36.7927 3.85084 36.1194 3.57606 35.3421H43.0854C42.8106 36.1194 42.3024 36.7927 41.6303 37.27C40.9582 37.7474 40.1551 38.0054 39.3307 38.0088ZM33.9974 28.6755C35.0583 28.6755 36.0757 29.0969 36.8258 29.847C37.576 30.5972 37.9974 31.6146 37.9974 32.6755H29.9974C29.9974 31.6146 30.4188 30.5972 31.169 29.847C31.9191 29.0969 32.9365 28.6755 33.9974 28.6755ZM31.3307 23.3421C31.3307 22.8147 31.4871 22.2992 31.7801 21.8606C32.0732 21.4221 32.4896 21.0803 32.9769 20.8785C33.4642 20.6766 34.0004 20.6238 34.5176 20.7267C35.0349 20.8296 35.5101 21.0836 35.883 21.4565C36.256 21.8295 36.5099 22.3046 36.6128 22.8219C36.7157 23.3392 36.6629 23.8754 36.4611 24.3626C36.2592 24.8499 35.9174 25.2664 35.4789 25.5594C35.0404 25.8524 34.5248 26.0088 33.9974 26.0088C33.2902 26.0088 32.6119 25.7279 32.1118 25.2278C31.6117 24.7277 31.3307 24.0494 31.3307 23.3421ZM43.3307 32.6755H40.6641C40.6648 31.5844 40.3978 30.5097 39.8863 29.5459C39.3749 28.5821 38.6347 27.7585 37.7307 27.1475C38.4895 26.4068 39.0103 25.4568 39.2266 24.4188C39.4429 23.3808 39.3449 22.3018 38.945 21.3198C38.5452 20.3377 37.8617 19.4971 36.9818 18.9054C36.102 18.3136 35.0657 17.9976 34.0054 17.9976C32.9451 17.9976 31.9088 18.3136 31.029 18.9054C30.1491 19.4971 29.4656 20.3377 29.0658 21.3198C28.6659 22.3018 28.5679 23.3808 28.7842 24.4188C29.0005 25.4568 29.5213 26.4068 30.2801 27.1475C29.3731 27.7567 28.6298 28.5795 28.1155 29.5434C27.6012 30.5073 27.3317 31.5829 27.3307 32.6755H24.6641V15.8301L27.9787 17.8195C28.1811 17.9407 28.412 18.0061 28.6479 18.009C28.8838 18.0119 29.1162 17.9521 29.3215 17.8358C29.5267 17.7195 29.6974 17.5508 29.8162 17.3469C29.9349 17.1431 29.9974 16.9114 29.9974 16.6755V14.0088H36.6641C37.7249 14.0088 38.7423 13.5874 39.4925 12.8372C40.2426 12.0871 40.6641 11.0697 40.6641 10.0088V8.92081C41.4413 9.19559 42.1146 9.70378 42.5919 10.3759C43.0693 11.048 43.3273 11.8511 43.3307 12.6755V32.6755ZM11.3307 7.34214C11.3307 6.98852 11.4712 6.64938 11.7213 6.39933C11.9713 6.14929 12.3104 6.00881 12.6641 6.00881H33.9974C34.351 6.00881 34.6902 6.14929 34.9402 6.39933C35.1903 6.64938 35.3307 6.98852 35.3307 7.34214C35.3307 7.69577 35.1903 8.0349 34.9402 8.28495C34.6902 8.535 34.351 8.67548 33.9974 8.67548H12.6641C12.3104 8.67548 11.9713 8.535 11.7213 8.28495C11.4712 8.0349 11.3307 7.69577 11.3307 7.34214Z" fill="url(#paint0_linear_3947_5535)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_3947_5535" x1="1.63802" y1="44.4977" x2="54.0489" y2="25.2926" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6549F6" />
                                    <stop offset="0.79" stop-color="#FF611D" />
                                </linearGradient>
                                <clipPath id="clip0_3947_5535">
                                    <rect width="46" height="46" fill="white" transform="translate(0 0.00878906)" />
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <div className="flex flex-col gap-8 items-center text-center">
                            <div><h2>Super Cepat</h2></div>
                            <div><h2>Gak perlu nunggu lama, hasil keluar dalam 1 hari</h2></div>
                        </div>
                    </div>
                    <div className="w-[400px] h-[303px] bg-white py-6 px-10 lg:py-12 lg:px-20 hover:-translate-y-2 transition-all duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] flex justify-between items-center flex-col ">
                        <div><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.6655 39.3421C40.6655 39.6957 40.525 40.0349 40.275 40.2849C40.025 40.535 39.6858 40.6754 39.3322 40.6754H33.9989C33.6452 40.6754 33.3061 40.535 33.056 40.2849C32.806 40.0349 32.6655 39.6957 32.6655 39.3421C32.6655 38.9885 32.806 38.6493 33.056 38.3993C33.3061 38.1492 33.6452 38.0088 33.9989 38.0088H39.3322C39.6858 38.0088 40.025 38.1492 40.275 38.3993C40.525 38.6493 40.6655 38.9885 40.6655 39.3421ZM45.9989 39.3421C45.9989 41.1102 45.2965 42.8059 44.0462 44.0561C42.796 45.3064 41.1003 46.0088 39.3322 46.0088H7.33219C5.6812 46.0072 4.08952 45.3931 2.86535 44.2853C1.64118 43.1775 0.871612 41.6549 0.705656 40.0122C0.5397 38.3696 0.989162 36.7238 1.96701 35.3936C2.94487 34.0633 4.38154 33.1432 5.99886 32.8114V13.7794C6.00227 12.7199 6.42285 11.7044 7.16952 10.9528L16.2762 1.8461C16.6466 1.47385 17.0871 1.17872 17.5723 0.977786C18.0575 0.776847 18.5777 0.674081 19.1029 0.675428H27.5615C28.0867 0.674081 28.6069 0.776847 29.0921 0.977786C29.5772 1.17872 30.0178 1.47385 30.3882 1.8461L34.6122 6.07009C35.4907 6.20342 36.2994 6.62684 36.9095 7.27292C37.5196 7.91901 37.896 8.75063 37.9788 9.63538C38.0616 10.5201 37.8461 11.4071 37.3665 12.1552C36.8868 12.9033 36.1707 13.4694 35.3322 13.7634V14.6274L38.1455 16.4941C38.5106 16.7377 38.81 17.0676 39.017 17.4547C39.224 17.8417 39.3323 18.2738 39.3322 18.7128V20.6754C39.3322 21.0291 39.1917 21.3682 38.9417 21.6182C38.6916 21.8683 38.3525 22.0088 37.9989 22.0088C37.6452 22.0088 37.3061 21.8683 37.056 21.6182C36.806 21.3682 36.6655 21.0291 36.6655 20.6754V18.7234L33.9989 16.9448L31.3322 18.7234V20.6754C31.3322 21.0291 31.1917 21.3682 30.9417 21.6182C30.6916 21.8683 30.3525 22.0088 29.9989 22.0088C29.6452 22.0088 29.3061 21.8683 29.056 21.6182C28.806 21.3682 28.6655 21.0291 28.6655 20.6754V18.7234C28.6655 18.2845 28.7737 17.8524 28.9807 17.4653C29.1877 17.0783 29.4871 16.7484 29.8522 16.5048L32.6655 14.6274V13.7634C32.0539 13.5452 31.5046 13.1813 31.065 12.7032C30.6255 12.2251 30.309 11.6472 30.1429 11.0194L24.0095 8.97143L19.4389 18.1101L24.2922 32.6754H27.4682C27.3984 32.4589 27.3528 32.2353 27.3322 32.0088V28.0088C27.3336 27.1251 27.6852 26.2781 28.3101 25.6533C28.9349 25.0285 29.7819 24.6768 30.6655 24.6754H37.3322C38.2158 24.6768 39.0628 25.0285 39.6877 25.6533C40.3125 26.2781 40.6641 27.1251 40.6655 28.0088V32.0088C40.6465 32.2759 40.5927 32.5395 40.5055 32.7928C42.0435 33.0677 43.436 33.8741 44.44 35.0711C45.444 36.2681 45.9957 37.7798 45.9989 39.3421ZM32.6655 10.0088C32.6655 10.2725 32.7437 10.5303 32.8902 10.7495C33.0367 10.9688 33.245 11.1397 33.4886 11.2406C33.7322 11.3415 34.0003 11.3679 34.259 11.3165C34.5176 11.265 34.7552 11.138 34.9417 10.9516C35.1281 10.7651 35.2551 10.5275 35.3066 10.2689C35.358 10.0102 35.3316 9.74215 35.2307 9.49852C35.1298 9.25488 34.9589 9.04664 34.7396 8.90014C34.5203 8.75363 34.2626 8.67543 33.9989 8.67543C33.6452 8.67543 33.3061 8.8159 33.056 9.06595C32.806 9.316 32.6655 9.65514 32.6655 10.0088ZM29.9989 32.0088C29.9989 32.1856 30.0691 32.3551 30.1941 32.4802C30.3191 32.6052 30.4887 32.6754 30.6655 32.6754H37.3322C37.509 32.6754 37.6786 32.6052 37.8036 32.4802C37.9286 32.3551 37.9989 32.1856 37.9989 32.0088V28.0088C37.9989 27.832 37.9286 27.6624 37.8036 27.5374C37.6786 27.4123 37.509 27.3421 37.3322 27.3421H30.6655C30.4887 27.3421 30.3191 27.4123 30.1941 27.5374C30.0691 27.6624 29.9989 27.832 29.9989 28.0088V32.0088ZM26.5642 7.01409L30.4015 8.29143C30.6793 7.71562 31.0896 7.21389 31.5989 6.82743L28.5029 3.73143C28.3079 3.56991 28.0808 3.45167 27.8367 3.38455C27.5926 3.31743 27.337 3.30296 27.0869 3.34209C27.3132 3.94913 27.384 4.60319 27.2927 5.24459C27.2014 5.886 26.951 6.49433 26.5642 7.01409ZM21.9989 4.67543C21.9989 4.93914 22.0771 5.19692 22.2236 5.41619C22.3701 5.63545 22.5783 5.80635 22.8219 5.90727C23.0656 6.00818 23.3337 6.03459 23.5923 5.98314C23.851 5.93169 24.0885 5.80471 24.275 5.61824C24.4615 5.43177 24.5885 5.19419 24.6399 4.93555C24.6914 4.67691 24.6649 4.40882 24.564 4.16518C24.4631 3.92155 24.2922 3.71331 24.073 3.5668C23.8537 3.42029 23.5959 3.34209 23.3322 3.34209C22.9786 3.34209 22.6394 3.48257 22.3894 3.73262C22.1393 3.98267 21.9989 4.32181 21.9989 4.67543ZM9.97219 11.9234C11.4296 11.2699 13.0744 11.1662 14.6023 11.6314C16.1303 12.0966 17.4382 13.0993 18.2842 14.4541L21.4282 8.17143C20.5893 7.72483 19.9401 6.99017 19.6 6.10276C19.2599 5.21534 19.2519 4.23493 19.5775 3.34209C19.3274 3.30156 19.0714 3.31535 18.8271 3.38253C18.5828 3.44971 18.3558 3.56871 18.1615 3.73143L9.97219 11.9234ZM8.66552 18.0088C8.66552 18.7999 8.90012 19.5732 9.33964 20.231C9.77917 20.8888 10.4039 21.4015 11.1348 21.7043C11.8657 22.007 12.67 22.0862 13.4459 21.9319C14.2218 21.7776 14.9345 21.3966 15.4939 20.8372C16.0534 20.2778 16.4343 19.565 16.5887 18.7891C16.743 18.0132 16.6638 17.2089 16.361 16.478C16.0583 15.7471 15.5456 15.1224 14.8878 14.6829C14.23 14.2434 13.4566 14.0088 12.6655 14.0088C11.6047 14.0088 10.5872 14.4302 9.8371 15.1803C9.08695 15.9305 8.66552 16.9479 8.66552 18.0088ZM8.66552 32.6754H21.4815L17.9375 22.0408C17.4158 22.7379 16.7607 23.3243 16.0103 23.766C15.2599 24.2077 14.4292 24.4959 13.5665 24.6137C12.7038 24.7316 11.8262 24.6768 10.9849 24.4525C10.1435 24.2283 9.35513 23.839 8.66552 23.3074V32.6754ZM43.3322 39.3421C43.3322 38.2812 42.9108 37.2638 42.1606 36.5137C41.4105 35.7635 40.3931 35.3421 39.3322 35.3421H7.33219C6.27132 35.3421 5.25391 35.7635 4.50376 36.5137C3.75362 37.2638 3.33219 38.2812 3.33219 39.3421C3.33219 40.403 3.75362 41.4204 4.50376 42.1705C5.25391 42.9207 6.27132 43.3421 7.33219 43.3421H39.3322C40.3931 43.3421 41.4105 42.9207 42.1606 42.1705C42.9108 41.4204 43.3322 40.403 43.3322 39.3421ZM25.9989 38.0088H20.6655C20.3119 38.0088 19.9728 38.1492 19.7227 38.3993C19.4727 38.6493 19.3322 38.9885 19.3322 39.3421C19.3322 39.6957 19.4727 40.0349 19.7227 40.2849C19.9728 40.535 20.3119 40.6754 20.6655 40.6754H25.9989C26.3525 40.6754 26.6916 40.535 26.9417 40.2849C27.1917 40.0349 27.3322 39.6957 27.3322 39.3421C27.3322 38.9885 27.1917 38.6493 26.9417 38.3993C26.6916 38.1492 26.3525 38.0088 25.9989 38.0088ZM12.6655 38.0088H7.33219C6.97857 38.0088 6.63943 38.1492 6.38938 38.3993C6.13933 38.6493 5.99886 38.9885 5.99886 39.3421C5.99886 39.6957 6.13933 40.0349 6.38938 40.2849C6.63943 40.535 6.97857 40.6754 7.33219 40.6754H12.6655C13.0191 40.6754 13.3583 40.535 13.6083 40.2849C13.8584 40.0349 13.9989 39.6957 13.9989 39.3421C13.9989 38.9885 13.8584 38.6493 13.6083 38.3993C13.3583 38.1492 13.0191 38.0088 12.6655 38.0088Z" fill="url(#paint0_linear_3947_6451)" />
                            <defs>
                                <linearGradient id="paint0_linear_3947_6451" x1="1.6457" y1="44.4977" x2="54.051" y2="25.2973" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6549F6" />
                                    <stop offset="0.79" stop-color="#FF611D" />
                                </linearGradient>
                            </defs>
                        </svg>

                        </div>
                        <div className="flex flex-col gap-8 items-center text-center">
                            <div><h2>100% Online</h2></div>
                            <div><h2>Bisa Daftar darimana aja dan kapan saja</h2></div>
                        </div>
                    </div>
                    <div className="w-[400px] h-[303px] bg-white py-6 px-10 lg:py-12 lg:px-20 hover:-translate-y-2 transition-all duration-500 shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] flex justify-between items-center flex-col ">
                        <div><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3947_6450)">
                                <path d="M40.6655 39.3421C40.6655 39.6957 40.525 40.0349 40.275 40.2849C40.025 40.535 39.6858 40.6754 39.3322 40.6754H33.9989C33.6452 40.6754 33.3061 40.535 33.056 40.2849C32.806 40.0349 32.6655 39.6957 32.6655 39.3421C32.6655 38.9885 32.806 38.6493 33.056 38.3993C33.3061 38.1492 33.6452 38.0088 33.9989 38.0088H39.3322C39.6858 38.0088 40.025 38.1492 40.275 38.3993C40.525 38.6493 40.6655 38.9885 40.6655 39.3421ZM45.9989 39.3421C45.9989 41.1102 45.2965 42.8059 44.0462 44.0561C42.796 45.3064 41.1003 46.0088 39.3322 46.0088H7.33219C5.6812 46.0072 4.08952 45.3931 2.86535 44.2853C1.64118 43.1775 0.871612 41.6549 0.705656 40.0122C0.5397 38.3696 0.989162 36.7238 1.96701 35.3936C2.94487 34.0633 4.38154 33.1432 5.99886 32.8114V13.7794C6.00227 12.7199 6.42285 11.7044 7.16952 10.9528L16.2762 1.8461C16.6466 1.47385 17.0871 1.17872 17.5723 0.977786C18.0575 0.776847 18.5777 0.674081 19.1029 0.675428H27.5615C28.0867 0.674081 28.6069 0.776847 29.0921 0.977786C29.5772 1.17872 30.0178 1.47385 30.3882 1.8461L34.6122 6.07009C35.4907 6.20342 36.2994 6.62684 36.9095 7.27292C37.5196 7.91901 37.896 8.75063 37.9788 9.63538C38.0616 10.5201 37.8461 11.4071 37.3665 12.1552C36.8868 12.9033 36.1707 13.4694 35.3322 13.7634V14.6274L38.1455 16.4941C38.5106 16.7377 38.81 17.0676 39.017 17.4547C39.224 17.8417 39.3323 18.2738 39.3322 18.7128V20.6754C39.3322 21.0291 39.1917 21.3682 38.9417 21.6182C38.6916 21.8683 38.3525 22.0088 37.9989 22.0088C37.6452 22.0088 37.3061 21.8683 37.056 21.6182C36.806 21.3682 36.6655 21.0291 36.6655 20.6754V18.7234L33.9989 16.9448L31.3322 18.7234V20.6754C31.3322 21.0291 31.1917 21.3682 30.9417 21.6182C30.6916 21.8683 30.3525 22.0088 29.9989 22.0088C29.6452 22.0088 29.3061 21.8683 29.056 21.6182C28.806 21.3682 28.6655 21.0291 28.6655 20.6754V18.7234C28.6655 18.2845 28.7737 17.8524 28.9807 17.4653C29.1877 17.0783 29.4871 16.7484 29.8522 16.5048L32.6655 14.6274V13.7634C32.0539 13.5452 31.5046 13.1813 31.065 12.7032C30.6255 12.2251 30.309 11.6472 30.1429 11.0194L24.0095 8.97143L19.4389 18.1101L24.2922 32.6754H27.4682C27.3984 32.4589 27.3528 32.2353 27.3322 32.0088V28.0088C27.3336 27.1251 27.6852 26.2781 28.3101 25.6533C28.9349 25.0285 29.7819 24.6768 30.6655 24.6754H37.3322C38.2158 24.6768 39.0628 25.0285 39.6877 25.6533C40.3125 26.2781 40.6641 27.1251 40.6655 28.0088V32.0088C40.6465 32.2759 40.5927 32.5395 40.5055 32.7928C42.0435 33.0677 43.436 33.8741 44.44 35.0711C45.444 36.2681 45.9957 37.7798 45.9989 39.3421ZM32.6655 10.0088C32.6655 10.2725 32.7437 10.5303 32.8902 10.7495C33.0367 10.9688 33.245 11.1397 33.4886 11.2406C33.7322 11.3415 34.0003 11.3679 34.259 11.3165C34.5176 11.265 34.7552 11.138 34.9417 10.9516C35.1281 10.7651 35.2551 10.5275 35.3066 10.2689C35.358 10.0102 35.3316 9.74215 35.2307 9.49852C35.1298 9.25488 34.9589 9.04664 34.7396 8.90014C34.5203 8.75363 34.2626 8.67543 33.9989 8.67543C33.6452 8.67543 33.3061 8.8159 33.056 9.06595C32.806 9.316 32.6655 9.65514 32.6655 10.0088ZM29.9989 32.0088C29.9989 32.1856 30.0691 32.3551 30.1941 32.4802C30.3191 32.6052 30.4887 32.6754 30.6655 32.6754H37.3322C37.509 32.6754 37.6786 32.6052 37.8036 32.4802C37.9286 32.3551 37.9989 32.1856 37.9989 32.0088V28.0088C37.9989 27.832 37.9286 27.6624 37.8036 27.5374C37.6786 27.4123 37.509 27.3421 37.3322 27.3421H30.6655C30.4887 27.3421 30.3191 27.4123 30.1941 27.5374C30.0691 27.6624 29.9989 27.832 29.9989 28.0088V32.0088ZM26.5642 7.01409L30.4015 8.29143C30.6793 7.71562 31.0896 7.21389 31.5989 6.82743L28.5029 3.73143C28.3079 3.56991 28.0808 3.45167 27.8367 3.38455C27.5926 3.31743 27.337 3.30296 27.0869 3.34209C27.3132 3.94913 27.384 4.60319 27.2927 5.24459C27.2014 5.886 26.951 6.49433 26.5642 7.01409ZM21.9989 4.67543C21.9989 4.93914 22.0771 5.19692 22.2236 5.41619C22.3701 5.63545 22.5783 5.80635 22.8219 5.90727C23.0656 6.00818 23.3337 6.03459 23.5923 5.98314C23.851 5.93169 24.0885 5.80471 24.275 5.61824C24.4615 5.43177 24.5885 5.19419 24.6399 4.93555C24.6914 4.67691 24.6649 4.40882 24.564 4.16518C24.4631 3.92155 24.2922 3.71331 24.073 3.5668C23.8537 3.42029 23.5959 3.34209 23.3322 3.34209C22.9786 3.34209 22.6394 3.48257 22.3894 3.73262C22.1393 3.98267 21.9989 4.32181 21.9989 4.67543ZM9.97219 11.9234C11.4296 11.2699 13.0744 11.1662 14.6023 11.6314C16.1303 12.0966 17.4382 13.0993 18.2842 14.4541L21.4282 8.17143C20.5893 7.72483 19.9401 6.99017 19.6 6.10276C19.2599 5.21534 19.2519 4.23493 19.5775 3.34209C19.3274 3.30156 19.0714 3.31535 18.8271 3.38253C18.5828 3.44971 18.3558 3.56871 18.1615 3.73143L9.97219 11.9234ZM8.66552 18.0088C8.66552 18.7999 8.90012 19.5732 9.33964 20.231C9.77917 20.8888 10.4039 21.4015 11.1348 21.7043C11.8657 22.007 12.67 22.0862 13.4459 21.9319C14.2218 21.7776 14.9345 21.3966 15.4939 20.8372C16.0534 20.2778 16.4343 19.565 16.5887 18.7891C16.743 18.0132 16.6638 17.2089 16.361 16.478C16.0583 15.7471 15.5456 15.1224 14.8878 14.6829C14.23 14.2434 13.4566 14.0088 12.6655 14.0088C11.6047 14.0088 10.5872 14.4302 9.8371 15.1803C9.08695 15.9305 8.66552 16.9479 8.66552 18.0088ZM8.66552 32.6754H21.4815L17.9375 22.0408C17.4158 22.7379 16.7607 23.3243 16.0103 23.766C15.2599 24.2077 14.4292 24.4959 13.5665 24.6137C12.7038 24.7316 11.8262 24.6768 10.9849 24.4525C10.1435 24.2283 9.35513 23.839 8.66552 23.3074V32.6754ZM43.3322 39.3421C43.3322 38.2812 42.9108 37.2638 42.1606 36.5137C41.4105 35.7635 40.3931 35.3421 39.3322 35.3421H7.33219C6.27132 35.3421 5.25391 35.7635 4.50376 36.5137C3.75362 37.2638 3.33219 38.2812 3.33219 39.3421C3.33219 40.403 3.75362 41.4204 4.50376 42.1705C5.25391 42.9207 6.27132 43.3421 7.33219 43.3421H39.3322C40.3931 43.3421 41.4105 42.9207 42.1606 42.1705C42.9108 41.4204 43.3322 40.403 43.3322 39.3421ZM25.9989 38.0088H20.6655C20.3119 38.0088 19.9728 38.1492 19.7227 38.3993C19.4727 38.6493 19.3322 38.9885 19.3322 39.3421C19.3322 39.6957 19.4727 40.0349 19.7227 40.2849C19.9728 40.535 20.3119 40.6754 20.6655 40.6754H25.9989C26.3525 40.6754 26.6916 40.535 26.9417 40.2849C27.1917 40.0349 27.3322 39.6957 27.3322 39.3421C27.3322 38.9885 27.1917 38.6493 26.9417 38.3993C26.6916 38.1492 26.3525 38.0088 25.9989 38.0088ZM12.6655 38.0088H7.33219C6.97857 38.0088 6.63943 38.1492 6.38938 38.3993C6.13933 38.6493 5.99886 38.9885 5.99886 39.3421C5.99886 39.6957 6.13933 40.0349 6.38938 40.2849C6.63943 40.535 6.97857 40.6754 7.33219 40.6754H12.6655C13.0191 40.6754 13.3583 40.535 13.6083 40.2849C13.8584 40.0349 13.9989 39.6957 13.9989 39.3421C13.9989 38.9885 13.8584 38.6493 13.6083 38.3993C13.3583 38.1492 13.0191 38.0088 12.6655 38.0088Z" fill="url(#paint0_linear_3947_6450)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_3947_6450" x1="1.6457" y1="44.4977" x2="54.051" y2="25.2973" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6549F6" />
                                    <stop offset="0.79" stop-color="#FF611D" />
                                </linearGradient>
                                <clipPath id="clip0_3947_6450">
                                    <rect width="46" height="46" fill="white" transform="translate(0 0.00878906)" />
                                </clipPath>
                            </defs>
                        </svg>

                        </div>
                        <div className="flex flex-col gap-8 items-center text-center">
                            <div><h2>Tanpa Test</h2></div>
                            <div><h2>Seleksi cukup dari kelengkapan dokumen aja</h2></div>
                        </div>
                    </div>

                </div>

            </div> */}

            <CardSection />
            <Countdown />
            <CTASection />
        </UserLayout>
    )
}

export default Ods; 