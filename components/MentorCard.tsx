import * as React from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
import { Button } from './ui/button';

// const theme = createTheme();
// theme.spacing(2); // `${8 * 2}px` = '16px'


type Props = {
    id: string;
    country: string;
    description: string;
    email: string;
    gender: string;
    image: string;
    name: string;
    university: string;
    rating: Number,
    rate: Number
  };

const MentorCard = (props:Props) =>  {
  return (
        <div className="bg-white">

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 bg-white ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <img src={props.image} alt="Image" className="rounded-md object-cover h-full" />    
                    </div>
                    
                    <div className="p-4 sm:p-10 lg:flex-auto">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-0">{props.name}</h1>
                        <p className="text-base leading-7 text-gray-600">{props.university}</p>
                        <div className="mt-5 flex items-center gap-x-4">
                            <h3 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h3>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            Private forum access
                            </li>
                            <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            Member resources
                            </li>
                            <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            Entry to annual conference
                            </li>
                            <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                            </svg>
                            Official member t-shirt
                            </li>
                        </ul>
                        <div className="mt-5 flex items-center gap-x-4">
                            <h3 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Stats</h3>
                            <div className="h-px flex-auto bg-gray-100"></div>
                        </div>
                        <div className="bg-white py-6">
                            <div className="mx-auto max-w-7xl px-6">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">Residence country</dt>
                                        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{props.country}</dd>
                                    </div>
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">Hourly Mentorship Rate</dt>
                                        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{props.rate.toString()}</dd>
                                    </div>
                                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">Mentor Average Rating</dt>
                                        <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{props.rating.toString()}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <Button className='w-full'>Hey ! Let's Connect</Button>
                    </div>

            </div>
        </div>

        // <Box  
        //     sx={{
        //             width: '100%',
        //             position: 'relative',
        //             overflow: { xs: 'auto', sm: 'initial' },
        //             marginBottom:'20px'
        //         }}
        //     >
        //     <Card orientation="horizontal">
        //             <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
        //                 <img
        //                     src={props.image}
        //                     // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
        //                     loading="lazy"
        //                     alt=""
        //                 />
        //             </AspectRatio>
        //             <CardContent>
        //                <Typography fontSize="xl" fontWeight="lg">
        //                  {props.name}
        //                </Typography>
        //                <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
        //                  {props.university}
        //                </Typography>
        //                <Sheet
        //                     sx={{
        //                     bgcolor: 'background.level1',
        //                     borderRadius: 'sm',
        //                     p: 1.5,
        //                     my: 1.5,
        //                     display: 'flex',
        //                     gap: 2,
        //                     '& > div': { flex: 1 },
        //                     }}
        //                 >
                            
        //                     <div>
        //                         <Typography level="body-xs" fontWeight="lg">
        //                             Country
        //                         </Typography>
        //                         <Typography fontWeight="lg">{props.country}</Typography>
        //                     </div>
        //                     <div>
        //                         <Typography level="body-xs" fontWeight="lg">
        //                             Rating
        //                         </Typography>
        //                         <Typography fontWeight="lg">{props.rating.toString()}</Typography>
        //                     </div>
        //                     <div>
        //                         <Typography level="body-xs" fontWeight="lg">
        //                             Rate
        //                         </Typography>
        //                         <Typography fontWeight="lg">{props.rate.toString()}</Typography>
        //                     </div>
        //                 </Sheet>

        //                 <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
        //                      {/* <Button variant="outlined" color="neutral">
        //                        Chat
        //                      </Button> */} 
        //                      <Link href={'/mentor/'+ props.id + '/bookSession'}>
        //                         <Button variant="solid" color="primary">Check Slots</Button>
        //                      </Link>
        //                 </Box>
        //             </CardContent>
        //     </Card>
        // </Box>
  );
}

export default MentorCard;