import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
/*import bgPic from '../../public/images/pfolio_bg.png';*/

import HeroButtons from './HeroButtons';

const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(
        theme.breakpoints.up('md'),
        { defaultMatches: true }
    );

    return (
        <div id='home'>
            <Box sx={{ width: 1, height: 1 }}>
                <Container padding={0} maxWidth='100%'>
                    <Box
                        display='flex'
                        flexDirection={{ xs: 'column', md: 'row' }}
                        position='relative'
                        minHeight={{ md: 600 }}
                    >
                        <Box
                            width={1}
                            order={{ xs: 2, md: 1 }}
                            display='flex'
                            alignItems='center'
                        >
                            <Container>
                                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                                    <Box marginBottom={2}>
                                        <Typography
                                            color={theme.palette.text.primary}
                                            variant='h2'
                                            fontWeight={700}
                                            align='center'
                                        >
                                            Welcome to{' '}
                                        </Typography>
                                        <Typography
                                            color={theme.palette.primary.main}
                                            variant='h2'
                                            fontWeight={700}
                                            align='center'
                                            marginBottom={3}
                                        >
                                            Scrumming IT Portfolio
                                        </Typography>
                                    </Box>
                                    <Box marginBottom={3}>
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            Hello. My name's Rob. I'm long-term IT with numerous diversions along the way. 
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            BSc Computer Science (Distinction) - 1989. Initially, Dev with Sun Microsystem startup in Scotland. SUN latterly bought by Oracle. 
                                            Subsequently, contractor in London - SYBASE SQL env.
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            Latterly, Scrum Master/ADM. Fully commited to Collaborative Team Delivery (Agile).
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            I am refocusing on Develomment roles. I am full stack capable from inception to deployment. The Scrum Master in me has compelled me to focus on building a clear path to 'Live'.
                                            My current focus is Dockerising & Deploying to Google Cloud.
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            I am actively seeking opportunities with my current ideal being short term contracts with SMART deliverables where I can add demonstrable value.
                                        </Typography>
                                        <br />
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            color={theme.palette.text.secondary}
                                            align='justify'
                                        >
                                            Just in case: S.M.A.R.T = Specific, Measurable, Achievable, Realistic, Time-based. 
                                        </Typography>
                                    </Box>
                                    <HeroButtons />
                                </Box>
                            </Container>
                        </Box>
                        <Box
                            sx={{
                                flex: { xs: '0 0 100%', md: '0 0 50%' },
                                position: 'relative',
                                maxWidth: { xs: '100%', md: '50%' },
                                order: { xs: 1, md: 2 }
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 1, md: '50vw' },
                                    height: '100%',
                                    position: 'relative'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            overflow: 'hidden',
                                            left: '0%',
                                            width: 1,
                                            height: 1,
                                            position: { xs: 'relative', md: 'absolute' },
                                            clipPath: {
                                                xs: 'none',
                                                md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                                            },
                                            shapeOutside: {
                                                xs: 'none',
                                                md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: { xs: 'auto', md: 1 },
                                                '& img': {
                                                    objectFit: 'cover',
                                                },
                                                '& .lazy-load-image-loaded': {
                                                    height: 1,
                                                    width: 1,
                                                },
                                            }}
                                        >
                                            <Box 
                                                component={LazyLoadImage}
                                                src='https://storage.cloud.google.com/pf-frontend-bucket-0/images/cat-clipped-0.png'
                                                alt='Background Image'
                                                effect='blur'
                                                height={{ xs: 'auto', md: 1 }}
                                                maxHeight={{ xs: 300, md: 1 }}
                                                width={1}
                                                maxWidth={1}
                                            />

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Divider sx={{ mt: 3}} />
            </Box>
        </div>     
    );
};

export default Hero;