import { Stack, Switch } from '@chakra-ui/react'
const Navbar = () => {
    function toggleColorMode() {
        document.documentElement.classList.toggle('dark')
      }
    return (
        <div className='flex float-right p-4'>
            <Stack onChange={toggleColorMode} align='center' direction='row'>
                <Switch size='lg' />
            </Stack>
        </div>
    )
}

export default Navbar