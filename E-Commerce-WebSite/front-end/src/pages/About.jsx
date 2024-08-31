import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloribus quae iste quis, quidem laudantium aut aliquam temporibus perferendis tempora aspernatur sapiente soluta minima eos, asperiores cumque alias quas! Quibusdam quas autem ea sequi voluptates iste unde porro amet rerum ipsa! Magnam fugiat incidunt provident.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum beatae laborum ullam mollitia maiores impedit numquam architecto asperiores molestiae distinctio similique possimus tempora ipsam assumenda eum, expedita ab saepe? Officiis fugit voluptates tempora, iure, magni saepe voluptatum vero dolor reprehenderit a debitis in possimus est inventore. Tempore commodi molestiae pariatur, eligendi cupiditate minima perferendis ratione amet aliquam rerum iste aliquid, dolore ipsam, facilis dolores recusandae error soluta! Et beatae eaque quod dolores corporis assumenda quidem voluptatem nesciunt in.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus, nostrum numquam reiciendis mollitia possimus, voluptatibus, obcaecati architecto commodi eos provident? Labore voluptatem facilis similique, quod tenetur ipsa, dignissimos incidunt eveniet esse dolorem quia qui accusamus omnis voluptate numquam nulla autem perspiciatis necessitatibus veritatis.</p>
      </div>
    </div>
     <div className="text-4xl py-4">
     <Title text1={'WHY'} text2={'CHOOSE US ?'} />
     </div>
     <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assuarance</b>
        <p className='text-gray-600'> className='text-gray-600'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas quas veniam!</p>
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convinience</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas quas veniam!</p>
      </div>

      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas quas veniam!</p>
      </div>
     </div>
      <NewsLetterBox /> 
    </div>
  )
}

export default About
