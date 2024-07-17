import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { FaCcStripe, FaGithub } from 'react-icons/fa6'
import { SiPrisma } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="w-fit h-full flex-col flex justify-center items-center bg-[#171717]">
      <h1 className='text-center text-3xl mt-12'>PROJECTS</h1>
      <div className='flex justify-evenly items-start mt-12 w-full'>
        <div className='flex justify-evenly items-center flex-wrap gap-4'>

          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='Blog-App.jpeg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Blog App</Heading>
                <Text>
                  An Blog Website where user can perform CRUD operations on blogs and can also comment on them.JWT,bcrypt,express-session are used for authentication and authorization. Backend is made using Express.js and frontend is made using React.js and for data storage MongoDB is used.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>

              <i className="devicon-react-original colored"></i>

              <i className="devicon-nodejs-plain colored"></i>

              <i className="devicon-express-original colored"></i>

              <i className="devicon-mongodb-plain colored"></i>

            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to={'https://github.com/Yashh56/Blog-App'}>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code
                    <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>

                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='ChatApp.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Chat App</Heading>
                <Text>
                  A Chat Application where user can create rooms and chat with other users in real time. React.js is used for frontend and for backend Node.js and Socket.io is used for realtime communication.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>

              <i className="devicon-react-original colored"></i>

              <i className="devicon-nodejs-plain colored"></i>

              <i className="devicon-express-original colored"></i>

              <i className="devicon-mongodb-plain colored"></i>

              <i className="devicon-socketio-original colored"></i>

            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to={'https://github.com/Yashh56/MERN-Chat-App'}>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='SkillSell.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>SkillSell</Heading>
                <Text>
                  A website where user can sell and buy courses. Website is fully responsive and made using Next.js and Shadcn UI. for Data Storage and management  MySQL and Prisma  is used, for authentication clerk is used, for uploding image,files,etc uploagthing is used and for payment Stripe  is used.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <i className="devicon-nextjs-plain colored"></i>
              <i className="devicon-mysql-plain-wordmark colored"></i>
              <i className='text-black'><SiPrisma /></i>
              <i className=' text-[#635BFF]'><FaCcStripe /></i>
            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to='https://github.com/Yashh56/SkillSell'>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>
                </Link>
                <Button variant='link' colorScheme='blue'>
                  <Link to={'https://skill-sell.vercel.app/'} target='_blank'>Demo</Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='WeatherCLI.gif'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Weather Forecast CLI</Heading>
                <Text>
                  A CLI tool to get the weather forecast of any city. The tool is made using GO and <Link to={'https://www.weatherapi.com/'} target='_blank' className=' underline'>WeatherAPI</Link> API is used to get the weather data.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <i className="devicon-go-original-wordmark colored"></i>
            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to={'https://github.com/Yashh56/Weather-CLI'} target='_blank'>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>

                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='CryptoVerse.jpeg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>CryptoVerse</Heading>
                <Text>
                  A website where you can get information about different cryptocurrencies. React.js is used for frontend and Chart js is used for displaying the data in graphical form and axios is used for fetching data from API Context API is used for state management.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>

              <i className="devicon-react-original colored"></i>

              <i className="devicon-sass-original colored"></i>

            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to={'https://github.com/Yashh56/CryptoVerse'}>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>
                </Link>
                <Button variant='link' colorScheme='blue'>
                  <Link to={'https://crypto-verse-wine.vercel.app/'}>
                    Demo
                  </Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW='sm' className='hover:scale-105 transition-all duration-500 cursor-pointer'>
            <CardBody>
              <Image
                src='library.jpg'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Library Manager</Heading>
                <Text>
                  Library Manager is a comprehensive backend system for managing a library's inventory, user transactions, and authentication. Built with Node.js, TypeScript, Express, and Prisma, it provides a robust and scalable solution for handling library operations.
                </Text>
              </Stack>
            </CardBody>
            <CardFooter className='gap-2'>

              <i className="devicon-typescript-plain colored"></i>

              <i className="devicon-express-original colored"></i>


            </CardFooter>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Link to={'https://github.com/Yashh56/Library-Manager'}>
                  <Button variant='outline' colorScheme='blue'>
                    Source Code <p className="text-black text-xl ml-2"><FaGithub /></p>
                  </Button>
                </Link>
                
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects
