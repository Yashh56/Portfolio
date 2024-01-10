import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isVisible to true if the section is in the viewport
      setIsVisible(isElementInViewport());
    };

    const isElementInViewport = () => {
      const element = document.getElementById('animatedSection1');
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom <= window.innerHeight;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on component mount
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='animatedSection2' className='h-full'>
      <div id="animatedSection2" className={`section ${isVisible ? 'animate' : ''}`}>
        <h1 className='text-4xl max-md:mt-5 text-center md:mt-16 text-white'>PROJECTS</h1>
        {/* // <div className="md:h-full text-center  max-md:justify-center max-md:items-center max-md:m-16 max-md:ml-8 md:w-[200vh] max-md:w-fit sm:w-fit mt-12 justify-center items-center"> */}
        <div className=' max-md:mt-3 flex max-md:flex-col flex-wrap md:mt-12 justify-center items-center text-center'>
          {/* <div className='mt-4 max-md:flex-col md:flex-wrap max-md:justify-evenly justify-center items-center flex  m-6 p-2'> */}
          <div className='md:flex md:flex-wrap justify-center items-center md:gap-10 '>
            <Card color={'white'} bg={'#202753'} className='hover:scale-105 transition-all duration-500 cursor-pointer max-md:mt-4 max-md:w-[40vh] size-max' maxW='sm'>
              <CardBody>
                <Image
                  src='Blog-App.jpeg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Blog App</Heading>
                  <Text>
                    An Blog Website where user can perform CRUD operations on blogs and can also comment on them.JWT,bcrypt,express-session are used for authentication and authorization.
                    Backend is made using Express.js and frontend is made using React.js and for data storage MongoDB is used.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Link target='_blank' to='https://github.com/Yashh56/Blog-App'>
                    <Button variant='solid' gap={3} colorScheme='blue'>
                      Source Code <i className="devicon-github-original colored"></i>
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card color={'white'} bg={'#202753'} className='hover:scale-105 transition-all duration-500 cursor-pointer max-md:mt-4 max-md:w-[40vh] size-max' maxW='sm'>
              <CardBody>
                <Image
                  src='Fun-Fact.jpeg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Fun Fact Generator</Heading>
                  <Text>
                    A website where you can get random facts about different topics.
                    Fun Fact Generator Web App in Python using the PyWebio module.
                    Essentially, it will create interesting facts at random and display them on the web interface.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2' gap={4}>
                  <Link target='_blank' to='https://github.com/Yashh56/Fun-Fact-Generator'>
                    <Button variant='solid' gap={3} colorScheme='blue'>
                      Source Code  <i className="devicon-github-original colored"></i>
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card color={'white'} bg={'#202753'} className='hover:scale-105 md:ml-12 transition-all duration-500 cursor-pointer max-md:mt-4 max-md:w-[40vh] size-max' maxW='sm'>
              <CardBody>
                <Image
                  src='SM.jpeg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>E-Commerce Website</Heading>
                  <Text>
                    An E-Commerce Website where user can buy products and can also add them to cart.
                    Context API is used for state management. User can add products to cart and can also remove them from cart.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Link target='_blank' to='https://github.com/Yashh56/E-Commerce-Site'>
                    <Button variant='solid' colorScheme='blue' gap={3}>
                      Source Code   <i className="devicon-github-original colored"></i>
                    </Button>
                  </Link>
                  <Button variant='ghost' colorScheme='blue'>
                    <Link target='_blank' to='https://e-commerce-site-tawny-six.vercel.app/'>
                      Demo
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card color={'white'} bg={'#202753'} className='hover:scale-105 transition-all duration-500 cursor-pointer max-md:mt-4 max-md:w-[40vh] size-max ' maxW='sm'>
              <CardBody>
                <Image
                  src='CryptoVerse.jpeg'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>CryptoVerse</Heading>
                  <Text>
                    A website where you can get information about different cryptocurrencies.
                    React.js is used for frontend and Chart js is used for displaying the data in graphical form and axios is used for fetching data from API Context API is used for state management.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Link target='_blank' to='https://github.com/Yashh56/CryptoVerse'>
                    <Button variant='solid' colorScheme='blue' gap={3}>
                      Source Code   <i className="devicon-github-original colored"></i>
                    </Button>
                  </Link>
                  <Button variant='ghost' colorScheme='blue'>
                    <Link target='_blank' to='https://crypto-verse-wine.vercel.app/'>
                      Demo
                    </Link>
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>

          </div>
          {/* <div className='mt-4 max-md:flex-col max-md:justify-evenly justify-center items-center flex  m-6 p-2'>

          <Card color={'white'} bg={'#202753'} className='hover:scale-105 transition-all duration-500 cursor-pointer max-md:mt-4 max-md:w-[30vh] size-max md:ml-12' maxW='sm'>
            <CardBody>
              <Image
                src='CryptoVerse.jpeg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>CryptoVerse</Heading>
                <Text>
                  A website where you can get information about different cryptocurrencies.
                  React.js is used for frontend and Chart js is used for displaying the data in graphical form and axios is used for fetching data from API Context API is used for state management.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link target='_blank' to='https://github.com/Yashh56/CryptoVerse'>
                  <Button variant='solid' colorScheme='blue' gap={3}>
                    Source Code   <i className="devicon-github-original colored"></i>
                  </Button>
                </Link>
                <Button variant='ghost' colorScheme='blue'>
                  <Link target='_blank' to='https://crypto-verse-wine.vercel.app/'>
                    Demo
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Projects