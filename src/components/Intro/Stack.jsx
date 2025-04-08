import React from 'react'
import StackIcon  from 'tech-stack-icons';
import Title from '../Title'

const Stack = () => {
    return (
        <div className="text-center flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="md:flex md:flex-col justify-around w-full rounded-md p-4 text-center ">
                
                <div className="flex flex-col h-8 items-center sm:my-4 mb-4 my-4 md:my-16 lg:mt-24 xl:mt-28">
                    <h1 className="font-medium text-2xl mb-4 text-black dark:text-gray-200">My Stack</h1>
                    <div className="flex flex-wrap sm:flex-row md:flex-row lg:flex-grid justify-center gap-x-2 gap-y-2 md:gap-x-2 md:gap-y-3 lg:gap-x-4 lg:gap-y-4 w-full lg:w-full mx-auto">
                        <a target="_blank" href="https://react.dev/" className='hover:opacity-100 w-12 h-12 md:w-16 md:h-16 opacity-80'>
                            <StackIcon name="reactjs" />
                        </a>
                        <a target="_blank" href="https://vite.dev/" className='hover:opacity-100 h-11 w-11 md:w-16 md:h-16 opacity-80'>
                            <StackIcon name="vitejs" />
                        </a>
                        <a target="_blank" href="https://tailwindcss.com/" className='hover:opacity-100 h-11 w-11 md:w-16 md:h-16 opacity-80'>
                            <StackIcon name="tailwindcss" />
                        </a>
                        <a target="_blank" href="https://www.djangoproject.com/" className='hover:opacity-100 h-11 w-11 md:w-16 md:h-16 opacity-80'>
                            <StackIcon name="django" />
                        </a>
                        <a target="_blank" href="https://www.postgresql.org/" className='hover:opacity-100 h-11 w-11 md:w-16 md:h-16 opacity-80'>
                            <StackIcon name="postgresql" />
                        </a>

                        <a target="_blank" href="https://aws.amazon.com/free/?gclid=Cj0KCQjw782_BhDjARIsABTv_JBV2-7JIzdh1SswbT2b2LVo6NF-LvqXREjFT-qBLUXakYPsAckm6DMaAv0IEALw_wcB&trk=6a4c3e9d-cdc9-4e25-8dd9-2bd8d15afbca&sc_channel=ps&ef_id=Cj0KCQjw782_BhDjARIsABTv_JBV2-7JIzdh1SswbT2b2LVo6NF-LvqXREjFT-qBLUXakYPsAckm6DMaAv0IEALw_wcB:G:s&s_kwcid=AL!4422!3!651751059780!e!!g!!aws!19852662197!145019195897&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all" className='hover:opacity-100 items-center  opacity-80 inline'>
                            <svg width="60" height="60"  viewBox="0 0 100 100" fill="text-black dark:text-white" xmlns="http://www.w3.org/2000/svg">
                                <g id="aws">
                                    <g id="aws_2">
                                        <path id="Vector" d="M28.1812 41.7181C28.1812 42.9487 28.3143 43.9465 28.5471 44.6782C28.8132 45.4099 29.1458 46.2081 29.6114 47.0728C29.7777 47.3389 29.8442 47.605 29.8442 47.8378C29.8442 48.1704 29.6446 48.503 29.2123 48.8355L27.117 50.2324C26.8176 50.432 26.5183 50.5317 26.2522 50.5317C25.9196 50.5317 25.587 50.3655 25.2545 50.0661C24.7888 49.5672 24.3897 49.0351 24.0571 48.503C23.7245 47.9375 23.392 47.3056 23.0261 46.5407C20.4319 49.6005 17.1725 51.1304 13.248 51.1304C10.4542 51.1304 8.22586 50.3322 6.59617 48.7358C4.96648 47.1393 4.13501 45.0108 4.13501 42.35C4.13501 39.523 5.13278 37.2282 7.16158 35.4987C9.19037 33.7692 11.8844 32.9045 15.31 32.9045C16.4408 32.9045 17.6049 33.0043 18.8355 33.1706C20.0661 33.3369 21.3299 33.6029 22.6603 33.9023V31.4743C22.6603 28.9467 22.1281 27.1839 21.0971 26.1529C20.0328 25.1219 18.2368 24.623 15.6759 24.623C14.5118 24.623 13.3145 24.756 12.0839 25.0554C10.8533 25.3547 9.656 25.7205 8.49194 26.1862C7.95979 26.419 7.56068 26.552 7.32787 26.6185C7.09506 26.6851 6.92876 26.7183 6.79573 26.7183C6.3301 26.7183 6.09729 26.3857 6.09729 25.6873V24.0576C6.09729 23.5255 6.16381 23.1263 6.3301 22.8935C6.4964 22.6607 6.79573 22.4279 7.26135 22.1951C8.42542 21.5964 9.82229 21.0975 11.452 20.6984C13.0817 20.2661 14.8111 20.0665 16.6404 20.0665C20.5982 20.0665 23.4917 20.9645 25.3542 22.7605C27.1835 24.5565 28.1147 27.2837 28.1147 30.9422V41.7181H28.1812ZM14.6781 46.7735C15.7757 46.7735 16.9065 46.5739 18.1038 46.1748C19.3011 45.7757 20.3654 45.044 21.2634 44.0462C21.7955 43.4143 22.1946 42.7159 22.3942 41.9177C22.5937 41.1195 22.7268 40.1549 22.7268 39.0241V37.6273C21.7623 37.3944 20.7312 37.1949 19.667 37.0619C18.6027 36.9288 17.5716 36.8623 16.5406 36.8623C14.3123 36.8623 12.6826 37.2947 11.585 38.1927C10.4875 39.0907 9.95533 40.3545 9.95533 42.0174C9.95533 43.5806 10.3544 44.7447 11.1859 45.5429C11.9841 46.3744 13.1482 46.7735 14.6781 46.7735ZM41.3851 50.3655C40.7864 50.3655 40.3873 50.2657 40.1212 50.0329C39.8551 49.8333 39.6223 49.3677 39.4228 48.7358L31.6069 23.0266C31.4074 22.3614 31.3076 21.929 31.3076 21.6962C31.3076 21.1641 31.5737 20.8647 32.1058 20.8647H35.3652C35.9971 20.8647 36.4295 20.9645 36.6623 21.1973C36.9284 21.3969 37.1279 21.8625 37.3275 22.4944L42.915 44.5119L48.1034 22.4944C48.2697 21.8292 48.4692 21.3969 48.7353 21.1973C49.0014 20.9978 49.467 20.8647 50.0657 20.8647H52.7264C53.3583 20.8647 53.7907 20.9645 54.0567 21.1973C54.3228 21.3969 54.5556 21.8625 54.6887 22.4944L59.9436 44.7779L65.6974 22.4944C65.8969 21.8292 66.1297 21.3969 66.3625 21.1973C66.6286 20.9978 67.061 20.8647 67.6597 20.8647H70.7527C71.2849 20.8647 71.5842 21.1308 71.5842 21.6962C71.5842 21.8625 71.5509 22.0288 71.5177 22.2284C71.4844 22.4279 71.4179 22.694 71.2849 23.0598L63.2695 48.769C63.0699 49.4342 62.8371 49.8666 62.571 50.0661C62.305 50.2657 61.8726 50.3987 61.3072 50.3987H58.4469C57.815 50.3987 57.3826 50.2989 57.1166 50.0661C56.8505 49.8333 56.6177 49.4009 56.4846 48.7358L51.3295 27.2837L46.2076 48.7025C46.0413 49.3677 45.8418 49.8001 45.5757 50.0329C45.3096 50.2657 44.844 50.3655 44.2453 50.3655H41.3851ZM84.1228 51.2634C82.3934 51.2634 80.6639 51.0639 79.001 50.6648C77.338 50.2657 76.0409 49.8333 75.1762 49.3344C74.644 49.0351 74.2782 48.7025 74.1451 48.4032C74.0121 48.1038 73.9456 47.7712 73.9456 47.4719V45.7757C73.9456 45.0773 74.2117 44.7447 74.7106 44.7447C74.9101 44.7447 75.1097 44.7779 75.3092 44.8445C75.5088 44.911 75.8081 45.044 76.1407 45.1771C77.2715 45.6759 78.5021 46.075 79.7992 46.3411C81.1295 46.6072 82.4266 46.7402 83.757 46.7402C85.8523 46.7402 87.482 46.3744 88.6128 45.6427C89.7436 44.911 90.3423 43.8467 90.3423 42.4831C90.3423 41.5518 90.0429 40.7869 89.4443 40.1549C88.8456 39.523 87.7148 38.9576 86.0851 38.4255L81.2626 36.9288C78.8347 36.1639 77.0387 35.0331 75.9411 33.5364C74.8436 32.073 74.2782 30.4433 74.2782 28.7139C74.2782 27.317 74.5775 26.0864 75.1762 25.0221C75.7748 23.9578 76.5731 23.0266 77.5708 22.2949C78.5686 21.5299 79.6994 20.9645 81.0298 20.5654C82.3601 20.1663 83.757 20 85.2204 20C85.9521 20 86.717 20.0333 87.4487 20.133C88.2137 20.2328 88.9121 20.3658 89.6106 20.4989C90.2758 20.6652 90.9077 20.8315 91.5063 21.031C92.105 21.2306 92.5706 21.4301 92.9032 21.6297C93.3688 21.8958 93.7014 22.1618 93.901 22.4612C94.1005 22.7272 94.2003 23.0931 94.2003 23.5587V25.1219C94.2003 25.8203 93.9342 26.1862 93.4354 26.1862C93.1693 26.1862 92.7369 26.0531 92.1715 25.7871C90.2757 24.9223 88.1472 24.49 85.7858 24.49C83.89 24.49 82.3934 24.7893 81.3624 25.4212C80.3313 26.0531 79.7992 27.0176 79.7992 28.3813C79.7992 29.3125 80.1318 30.1107 80.7969 30.7427C81.4621 31.3746 82.6927 32.0065 84.4554 32.5719L89.1782 34.0686C91.5728 34.8335 93.3023 35.8978 94.3333 37.2614C95.3644 38.625 95.8633 40.1882 95.8633 41.9177C95.8633 43.3478 95.5639 44.6449 94.9985 45.7757C94.3999 46.9065 93.6016 47.9043 92.5706 48.7025C91.5396 49.534 90.309 50.1326 88.8789 50.565C87.3822 51.0306 85.8191 51.2634 84.1228 51.2634Z" fill="currentColor"/>
                                        <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M90.4087 67.4272C79.4665 75.5091 63.5687 79.7996 49.8993 79.7996C30.7422 79.7996 13.4808 72.7154 0.443259 60.9417C-0.587768 60.0104 0.343482 58.7466 1.57406 59.4783C15.6759 67.66 33.0703 72.6156 51.0634 72.6156C63.2029 72.6156 76.5397 70.0879 88.8123 64.8995C90.6415 64.068 92.2047 66.0968 90.4087 67.4272Z" fill="#FF9900"/>
                                        <path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M94.9652 62.2388C93.5684 60.4428 85.7193 61.3741 82.1606 61.8064C81.0963 61.9395 80.93 61.0082 81.8945 60.3098C88.1472 55.9196 98.4241 57.1834 99.6214 58.6468C100.819 60.1435 99.2889 70.4205 93.4353 75.3428C92.5373 76.1078 91.6726 75.7087 92.0717 74.7109C93.4021 71.4183 96.3621 64.0015 94.9652 62.2388Z" fill="#FF9900"/>
                                    </g>
                                </g>
                            </svg>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Stack;
