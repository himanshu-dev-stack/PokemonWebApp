import React from 'react'

function Footer() {
    return (
        <div className='sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300'>
            <div className='px-3 py-6 w-full flex justify-center items-center'>
                <h1 className='dark:text-white text-center'> Crafted with care  ✨ by <span className='text-blue-800 dark:text-blue-400 '><a href="https://github.com/himanshu-dev-stack" target='_blank'>Himanshu Dev Stack</a></span> © 2024</h1>
            </div>
        </div>
    )
}

export default Footer