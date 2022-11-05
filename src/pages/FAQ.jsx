// import React from 'react'

// const FAQ = () => {
//   return (
 

// <div className="bg-lightblue py-20 px-4 mt-8">
//     <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
//         <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
//             Frequently-asked questions
//         </h2>
//         <dl className="w-full md:w-2/3">
//             <dt className="mb-4">
//                 <h3 className="text-xl font-semibold">
//                 What is Life Coaching?
//                 </h3>
//             </dt>
//             <dd className="mb-16">
//                 <p>
//                 Life coaching is a process of goals set by you. We all know each step has roadblocks. We discuss roadblocks and what options you have when they occur. Life coaching is a method to practice small goals towards that final goal.
//                 </p>
//             </dd>
//             <dt className="mb-4">
//                 <h3 className="text-xl font-semibold">
//                 What is NOT Life Coaching?
//                 </h3>
//             </dt>
//             <dd className="mb-16">
//             <p>Life coaching is not counseling, that's for a licensed professional. If you are having mental health issues or immediate crisis consult a licensed therapist or call 911.</p>

                
//             </dd>
//             <dt className="mb-4">
//                 <h3 className="text-xl font-semibold">
//                 How does life coaching work?
//                 </h3>
//             </dt>
//             <dd className="mb-16">
//             <p>We decide together on the best plan based on the results you are looking to accomplish. Hourly rates allow you to detemine how many visits you think you will need. Monthly rates include weekly meetings by phone, and email correspondence and require a three month commitment. 
// Life coaching is empowering and helps establish life long habits. When personal goals become a challenge to meet life coaching can help simplyfiy! Sign up today for a free assessment!</p>

//             </dd>
//         </dl>
//     </div>
// </div>


    
//   )
// }

// export default FAQ

import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'What is Life Coaching?',
            answer: 'Life coaching is a process of goals set by you. We all know each step has roadblocks. We discuss roadblocks and what options you have when they occur. Life coaching is a method to practice small goals towards that final goal.',
            open: false
        },
        {
            question: 'What is NOT Life Coaching?',
            answer: "Life coaching is not counseling, that's for a licensed professional. If you are having mental health issues or immediate crisis consult a licensed therapist or call 911.",
            open: false
        },
        {
            question: 'How does life coaching work?',
            answer: 'We decide together on the best plan based on the results you are looking to accomplish. Hourly rates allow you to detemine how many visits you think you will need. Monthly rates include weekly meetings by phone, and email correspondence and require a three month commitment. <br> <br>Life coaching is empowering and helps establish life long habits. When personal goals become a challenge to meet life coaching can help simplyfiy! Sign up today for a free assessment!',
            open: false
        },
        // {
        //     question: 'How can I reach to support?',
        //     answer: 'Amet minim mollit non deserunt ullamco est sit <a href="#" title="" class="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.',
        //     open: false
        // }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;