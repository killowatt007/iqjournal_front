'use client'

import BsSimpleCarousel from "@/components/ui/carousel/BsSimpleCarousel";

const slides = [
  {
    image: '/images/slider3.jpeg',
    textTop: {
      text: 'СТАВЬ ВЫСОКИЕ ЦЕЛИ',
      bgColor: 'rgba(255, 155, 5, 0.46)'
    },
    textBottom: '"Помните, что вы никогда не достигнете большего, чем то, на что вы себя нацелили".'
  },
  {
    image: '/images/slider5.jpeg',
    textTop: {
      text: 'ЗАНИМАЙСЯ САМОРАЗВИТИЕМ',
      bgColor: 'rgba(0, 22, 112, 0.23)'
    },
    textBottom: 'Самые выгодные инвестиции - инвестиции в себя'
  },
  {
    image: '/images/slider2.jpeg',
    textTop: {
      text: 'ЧИТАЙ КНИГИ И АВТОБИОГРАФИИ УСПЕШНЫХ ЛЮДЕЙ',
      bgColor: 'rgba(143, 0, 136, 0.24)'
    },
    textBottom: '"Мудр тот, кто знает не многое, а нужное".'
  },
  {
    image: '/images/slider4.jpeg',
    textTop: {
      text: 'ПУТЕШЕСТВУЙЕ',
      bgColor: 'rgba(255, 155, 5, 0.46)'
    },
    textBottom: 'Есть в этом что-то волшебное: уезжаешь одним человеком, а возвращаешься совершенно другим.'
  },
  {
    image: '/images/slider1.jpeg',
  }
]

export default function Home() {
  return (
    <BsSimpleCarousel slides={slides}/>
  )
}