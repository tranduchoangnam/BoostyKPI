import { Footer, LandingNavBar } from '@/components/layout'
import { useAuth } from '@/context/AuthProvider'
import { Dashboard } from '@/layouts'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function LandingPage() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    const auth = useAuth();
    return (
        <Box
            sx={{
                backgroundColor: '#ECF2FF',
                width: '100%',
                height: '100%'
            }}>
            <LandingNavBar />
            <Box
                sx={{
                    mt: 8,
                    py: 5
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mx: { md: 7, xs: 3 },
                                gap: 3,
                                alignItems: { md: 'flex-start', xs: 'center' },
                                textAlign: { md: 'left', xs: 'center' },
                                my: { md: 0, xs: 2 }
                            }}>
                            <Typography component={'span'} sx={{ color: '#131523', fontSize: '38px', fontWeight: 700 }}>
                                Easily {''}
                                <Box component={'span'} sx={{ background: 'linear-gradient(90.27deg, #336DFF 0.27%, #608DFF 104.59%)', backgroundClip: 'text', fontSize: '38px', fontWeight: 700, color: 'transparent' }}>
                                    Track  {''}
                                </Box>
                                and {''}
                                <Box component={'span'} sx={{ background: 'linear-gradient(90.27deg, #336DFF 0.27%, #608DFF 104.59%)', backgroundClip: 'text', fontSize: '38px', fontWeight: 700, color: 'transparent' }}>
                                    Manage  {''}
                                </Box>
                                Your KPIs
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '18px', fontWeight: 400 }}>
                                BoostyKPI provides a comprehensive and user-friendly solution for tracking your key performance indicators.
                            </Typography>
                            <Button variant='contained' size='large' sx={{ backgroundColor: "#1E5EFF" }} onClick={() => auth.logOut()}>
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mr: { md: 7 }, p: { xs: 3, md: 0 } }}>
                            <img src="/img/Dashboard.png" alt="kpi-banner" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mx: { md: 7, xs: 3 }, py: { md: 8, xs: 6 } }} data-aos="fade-up">
                <Typography sx={{ color: '#131523', fontSize: '32px', fontWeight: 700, textAlign: 'center', }}>
                    Features
                </Typography>
                <Grid container spacing={5} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: '0px 1px 4px 0px #15223214', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M23 48C10.3171 48 0 37.6829 0 25C0 12.3171 10.3171 2 23 2C27.5211 2 31.9043 3.32086 35.6785 5.818C36.1801 6.15095 36.3203 6.83219 35.9873 7.336C35.65 7.842 34.971 7.97562 34.4693 7.64486C31.0566 5.38648 27.0896 4.19048 23 4.19048C11.5263 4.19048 2.19048 13.5263 2.19048 25C2.19048 36.4737 11.5263 45.8095 23 45.8095C34.4737 45.8095 43.8095 36.4737 43.8095 25C43.8095 20.9104 42.6157 16.9434 40.3551 13.5307C40.0222 13.0269 40.1602 12.3456 40.664 12.0127C41.1656 11.6819 41.8447 11.8155 42.182 12.3215C44.6813 16.0935 46 20.4789 46 25C46 37.6829 35.6829 48 23 48Z" fill="#2765C3" />
                                <path d="M23 30C20.242 30 18 27.756 18 25C18 22.244 20.242 20 23 20C25.758 20 28 22.244 28 25C28 27.756 25.758 30 23 30ZM23 22C21.346 22 20 23.346 20 25C20 26.654 21.346 28 23 28C24.654 28 26 26.654 26 25C26 23.346 24.654 22 23 22Z" fill="#FF6900" />
                                <path d="M23 26.0018C22.744 26.0018 22.488 25.9038 22.292 25.7098C21.902 25.3198 21.902 24.6858 22.292 24.2958L38 8.58778V5.00178C38 4.73578 38.106 4.48178 38.292 4.29378L42.292 0.293779C42.58 0.00777927 43.01 -0.0802208 43.382 0.0777792C43.756 0.233779 44 0.597779 44 1.00178V4.00178H47C47.404 4.00178 47.77 4.24578 47.924 4.61978C48.078 4.99378 47.992 5.42378 47.708 5.70978L43.708 9.70978C43.52 9.89778 43.266 10.0018 43 10.0018H39.414L23.706 25.7098C23.512 25.9038 23.256 26.0018 23 26.0018ZM40 8.00178H42.586L44.586 6.00178H43C42.448 6.00178 42 5.55378 42 5.00178V3.41578L40 5.41578V8.00178Z" fill="#FF6900" />
                                <path d="M23 40C14.7292 40 8 33.2708 8 25C8 16.7292 14.7292 10 23 10C25.2385 10 27.41 10.4962 29.4546 11.4746C30.0292 11.7515 30.2715 12.4392 29.9969 13.0138C29.7223 13.5885 29.0323 13.8308 28.4577 13.5562C26.7269 12.7277 24.89 12.3077 23 12.3077C16.0031 12.3077 10.3077 18.0008 10.3077 25C10.3077 31.9992 16.0031 37.6923 23 37.6923C29.9969 37.6923 35.6923 31.9992 35.6923 25C35.6923 23.11 35.27 21.2731 34.4415 19.54C34.1669 18.9654 34.4092 18.2777 34.9838 18.0008C35.5515 17.7238 36.2462 17.9638 36.5231 18.5431C37.5038 20.59 38 22.7615 38 25C38 33.2708 31.2708 40 23 40Z" fill="#2765C3" />
                            </svg>
                            <Typography sx={{ color: '#131523', fontSize: '24px', fontWeight: 700 }}>
                                Easy Goal Setting
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '16px', fontWeight: 400, px: 2 }}>
                                Set and track goals effortlessly to ensure you stay on target.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: '0px 1px 4px 0px #15223214', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M47 26H27C26.616 26 26.262 26.222 26.096 26.57C25.93 26.918 25.98 27.33 26.222 27.628L39.222 43.722C39.396 43.94 39.652 44.072 39.93 44.092C39.954 44.094 39.976 44.094 40 44.094C40.252 44.094 40.496 43.998 40.682 43.826C45.332 39.488 48 33.356 48 27C48 26.448 47.552 26 47 26ZM40.086 41.608L29.094 28H45.976C45.73 33.084 43.626 37.946 40.086 41.608Z" fill="#FF6900" />
                                <path d="M25 24H47C47.552 24 48 23.552 48 23C48 10.318 37.682 0 25 0C24.448 0 24 0.448 24 1V23C24 23.552 24.448 24 25 24ZM26 2.024C36.786 2.532 45.468 11.214 45.976 22H26V2.024ZM22 24.658V3C22 2.448 21.552 2 21 2C9.42 2 0 12.318 0 25C0 37.682 10.318 48 23 48C28.674 48 31.744 46.972 35.636 43.772C36.054 43.428 36.122 42.814 35.79 42.386L22 24.658ZM23 46C11.42 46 2 36.58 2 25C2 13.792 9.986 4.606 20 4.028V25C20 25.222 20.074 25.438 20.212 25.614L33.604 42.832C30.446 45.244 27.812 46 23 46Z" fill="#2765C3" />
                            </svg>
                            <Typography sx={{ color: '#131523', fontSize: '24px', fontWeight: 700 }}>
                                Dashboard
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '16px', fontWeight: 400, px: 2 }}>
                                Control and measure your KPI system all from a single screen.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: '0px 1px 4px 0px #15223214', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M10.382 26.078C10.01 25.922 9.58001 26.008 9.29201 26.294L6.00001 29.586L2.70801 26.292C2.42201 26.006 1.99001 25.922 1.61801 26.076C1.24401 26.23 1.00001 26.596 1.00001 27V47C1.00001 47.552 1.44801 48 2.00001 48H10C10.552 48 11 47.552 11 47V27C11 26.596 10.756 26.23 10.382 26.078ZM9.00001 46H3.00001V29.414L5.29401 31.706C5.68401 32.096 6.31801 32.096 6.70801 31.706L9.00001 29.414V46ZM44.708 10.292C44.52 10.106 44.266 10 44 10H42C41.734 10 41.48 10.106 41.292 10.292L37.292 14.292C37.106 14.48 37 14.734 37 15V47C37 47.552 37.448 48 38 48H46C46.552 48 47 47.552 47 47V13C47 12.734 46.894 12.48 46.708 12.292L44.708 10.292ZM45 46H39V15.414L42.414 12H43.586L45 13.414V46ZM30.706 14.292C30.316 13.902 29.682 13.902 29.292 14.292L25.292 18.292C25.106 18.48 25 18.734 25 19V47C25 47.552 25.448 48 26 48H34C34.552 48 35 47.552 35 47V19C35 18.734 34.894 18.48 34.706 18.292L30.706 14.292ZM33 46H27V19.414L30 16.414L33 19.414V46ZM18.706 18.292C18.316 17.902 17.682 17.902 17.292 18.292L13.292 22.292C13.106 22.48 13 22.734 13 23V47C13 47.552 13.448 48 14 48H22C22.552 48 23 47.552 23 47V23C23 22.734 22.894 22.48 22.706 22.292L18.706 18.292ZM21 46H15V23.414L18 20.414L21 23.414V46Z" fill="#2765C3" />
                                <path d="M46 0H40C39.596 0 39.232 0.244 39.076 0.618C38.92 0.992 39.006 1.422 39.292 1.708L41.584 4L34 11.586L30.706 8.294C30.316 7.904 29.682 7.904 29.292 8.294L22 15.586L18.706 12.294C18.316 11.904 17.682 11.904 17.292 12.294L6.00001 23.586L2.70601 20.294C2.31601 19.904 1.68201 19.904 1.29201 20.294C0.902012 20.684 0.902012 21.318 1.29201 21.708L5.29201 25.708C5.48801 25.902 5.74401 26 6.00001 26C6.25601 26 6.51201 25.902 6.70801 25.706L18 14.414L21.294 17.706C21.684 18.096 22.318 18.096 22.708 17.706L30 10.414L33.292 13.708C33.682 14.098 34.316 14.098 34.706 13.708L43 5.416L45.292 7.708C45.484 7.898 45.74 8 46 8C46.128 8 46.26 7.976 46.382 7.924C46.756 7.77 47 7.404 47 7V1C47 0.448 46.552 0 46 0ZM45 4.586L42.414 2H45V4.586Z" fill="#FF6900" />
                            </svg>
                            <Typography sx={{ color: '#131523', fontSize: '24px', fontWeight: 700 }}>
                                Calendar
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '16px', fontWeight: 400, px: 2 }}>
                                Easily schedule and track important KPI deadlines and milestones with calendar.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    mt: { md: 8, xs: 4 },
                    py: 5
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ display: { md: 'none', xs: 'flex' } }}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mx: { md: 7, xs: 3 },
                                gap: 3,
                                alignItems: { md: 'flex-start', xs: 'center' },
                                textAlign: { md: 'left', xs: 'center' },
                                my: { md: 0, xs: 2 }
                            }}
                            data-aos="fade-left"
                        >
                            <Typography component={'span'} sx={{ color: '#131523', fontSize: '38px', fontWeight: 700 }}>
                                Easy {''}
                                <Box component={'span'} sx={{ background: 'linear-gradient(90.27deg, #ef5350 0.27%, #fe9788 104.59%)', backgroundClip: 'text', fontSize: '38px', fontWeight: 700, color: 'transparent' }}>
                                    Goal {''}
                                </Box>
                                Setting
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '18px', fontWeight: 400 }}>
                                Set and track goals effortlessly to ensure you stay on target. Whether you’re aiming for short-term milestones or long-term strategic goals, our platform simplifies the process, helping you drive consistent growth and success.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ ml: { md: 7 }, p: { xs: 3, md: 0 } }} data-aos='fade-right'>
                            <img src="/img/Goal.png" alt="kpi-banner" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: { md: 'flex', xs: 'none' } }}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mx: { md: 7, xs: 3 },
                                gap: 3,
                                alignItems: { md: 'flex-start', xs: 'center' },
                                textAlign: { md: 'left', xs: 'center' },
                                my: { md: 0, xs: 2 }
                            }}
                            data-aos="fade-left"
                        >
                            <Typography component={'span'} sx={{ color: '#131523', fontSize: '38px', fontWeight: 700 }}>
                                Easy {''}
                                <Box component={'span'} sx={{ background: 'linear-gradient(90.27deg, #ef5350 0.27%, #fe9788 104.59%)', backgroundClip: 'text', fontSize: '38px', fontWeight: 700, color: 'transparent' }}>
                                    Goal {''}
                                </Box>
                                Setting
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '18px', fontWeight: 400 }}>
                                Set and track goals effortlessly to ensure you stay on target. Whether you’re aiming for short-term milestones or long-term strategic goals, our platform simplifies the process, helping you drive consistent growth and success.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    mt: { md: 8, xs: 4 },
                    py: 5,
                    mb: { md: 8, xs: 4 }
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                mx: { md: 7, xs: 3 },
                                gap: 3,
                                alignItems: { md: 'flex-start', xs: 'center' },
                                textAlign: { md: 'left', xs: 'center' },
                                my: { md: 0, xs: 2 }
                            }}
                            data-aos="fade-right">
                            <Typography component={'span'} sx={{ color: '#131523', fontSize: '38px', fontWeight: 700 }}>
                                Integrated {''}
                                <Box component={'span'} sx={{ background: 'linear-gradient(90.27deg, #3CCC98 0.27%, #1C9A6D 104.59%)', backgroundClip: 'text', fontSize: '38px', fontWeight: 700, color: 'transparent' }}>
                                    Calendar
                                </Box>
                            </Typography>
                            <Typography sx={{ color: '#5A607F', fontSize: '18px', fontWeight: 400 }}>
                                Easily schedule and track your KPIs with BoostyKPI's integrated calendar, visualizing goals and milestones over time to ensure timely completion.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mr: { md: 7 }, p: { xs: 3, md: 0 } }} data-aos="fade-left">
                            <img src="/img/Calendar.png" alt="calendar-banner" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ py: 1, backgroundColor: '#ffffff', boxShadow: ' 4px 0px 0px 1px #15223214' }}>
                <Footer />
            </Box>
        </Box>
    )
}
