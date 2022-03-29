import React, { Component } from 'react'
import { CarouselData } from './CarouselData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Swipe from 'react-easy-swipe'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
      paused: false,
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1
        this.setState({ currentSlide: newSlide })
      }
    }, 3000)
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1
    this.setState({ currentSlide: newSlide })
  }

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1
    this.setState({ currentSlide: newSlide })
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index })
  }

  render() {
    return (
      <div
        className='sm:flex text-center text-2xl  p-8 justify-between items-center mt-2 '
        id='project'
      >
        <h1 className='md:text-2xl lg:text-6xl sm:text-lg italic text-slate-500 mb-2'>
          Our locations
        </h1>
        <div className=' max-w-4xl h-full flex overflow-hidden relative'>
          <AiOutlineLeft
            onClick={this.prevSlide}
            className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer'
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <div className='relative '>
                  <img
                    src={slide.image}
                    alt='This is a carousel slide'
                    key={index}
                    className={
                      index === this.state.currentSlide
                        ? 'block w-76 flex-1 h-auto object-cover'
                        : 'hidden'
                    }
                    onMouseEnter={() => {
                      this.setState({ paused: true })
                    }}
                    onMouseLeave={() => {
                      this.setState({ paused: false })
                    }}
                  />
                  <h3
                    className={
                      index === this.state.currentSlide
                        ? 'text-5xl italic text-orange-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '
                        : 'hidden'
                    }
                  >
                    {slide.title}
                  </h3>
                </div>
              )
            })}
          </Swipe>

          <div className='absolute w-full flex justify-center bottom-0'>
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
                      : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index)
                  }}
                ></div>
              )
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer'
          />
        </div>
      </div>
    )
  }
}

export default Carousel
