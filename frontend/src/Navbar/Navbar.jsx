import React, { useState } from 'react'
import { Box, Button, Image, Input, InputGroup, Icon, Text, Flex, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { AddIcon, ArrowBackIcon, ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon, HamburgerIcon, MinusIcon, Search2Icon } from '@chakra-ui/icons';
import { FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { HiCurrencyRupee, HiMenuAlt1, HiOutlineLogout } from 'react-icons/hi';
import { FaBlackTie, FaBloggerB, FaTag } from 'react-icons/fa';
import { AiFillGift, AiFillHeart } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { RiCouponFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.jpg'


export default function Navbar() {
    
  const [display,changeDisplay] = useState('none');

  const [protiensShow, setprotiensShow]= useState(true);
  const [gainerShow, setgainerShow]= useState(false);
  const [protienfoodsShow, setprotienfoodsShow]= useState(false);
  const [prepostShow, setprepostShow]= useState(false);
  const [workoutShow, setworkoutShow]= useState(false);

  const [sportNutrition, setsportNutrition]= useState(false);
  const [healthNutrition, sethealthNutrition]= useState(false);
  const [fitness, setfitness]= useState(false);
  const [wellness, setwellness]= useState(false);

  
  const [categories, setCategories]= useState(false);
  const [bestSellers, setbestSellers]= useState(false);

  const handleCategories= ()=>{
    setCategories(!categories);
    setbestSellers(false);
  }

  const handleBestsellers= ()=>{
    setbestSellers(!bestSellers);
    setCategories(false);
  }


  const navigate = useNavigate();

  return (
    <Box  bg="white" zIndex={0} w="100%" position="sticky" p="10px 0px" borderBottom={'2px solid lightgrey'} fontFamily='Montserrat,sans-serif'>
    <Box display="flex" w={['100%','100%','95%',"80%"]} m="auto" justifyContent="space-between" alignItems="center" paddingTop={'10px'}>
    <Box display="flex">
    <IconButton  aria-label="Open Menu"  bg="none" size="lg" p="0px" _hover={{bg:"none",cursor:"pointer"}} mr={1} color="black" icon={<HamburgerIcon w="1.5em" h="1.5em" />}  display={["flex","flex","none"]} onClick={()=> changeDisplay('flex')} />
      <Link href="/">
        <Image m="0px" h="50px" src={logo} alt="logo" />
      </Link>
    </Box>
    <Box w={["40%", "40%", "50%"]} display={["flex", "flex", "flex"]}>
      <InputGroup m="0px" bg="#f1f4f4" rounded="5px" gap={["3px", "6px", "10px"]} w="100%" display="flex" alignItems="center" p={["2px 4px", "4px 8px", "7px 15px"]} 
      fontSize={["12px", "14px", "17px"]}>
        <Icon m="0px" pointerEvents='none' color='#999999'children={<Search2Icon />}/>
        <Input h={["14px", "19px", "30px"]} m="0px" bg="none" w="100%" border="none" p={["4px", "7px", "13px"]} outline="0px solid black"
         type='search' variant={'unstyled'} fontSize={["12px", "14px", "12px"]} placeholder='Search for products and brands...' />
      </InputGroup>
    </Box>
    <Box w="17%" display="flex" justifyContent="space-between" alignItems="center">
    <Link to='/login'>
      <Button display={["none", "none", "flex"]} m="0px" p="11px 25px" rounded="5px" border="none" bg="#2eb8b8" fontSize="18px" color="white">Login</Button>
    </Link>
      <Box display="flex" justifyContent="center" alignItems="center">
      <Link display={["flex", "flex", "flex"]} to={'/cart'}>
        <Icon m="0px" boxSize="25px" as={FiShoppingCart} />
        </Link>
      </Box>
    </Box>
  </Box>
  <Box>
    
      <Flex w="100%" h="100%" color="black" bg="white" zIndex={20} pos="sticky" top="0" left="0" overflowY="auto" flexDir="column" display={display} >
       <Box display={["flex", "flex", "none"]} justifyContent="space-between" alignItems="center" bg="#00cccc" p="20px 0px">
        <IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" bg="none" color="white" icon={<CloseIcon/>} onClick={()=> changeDisplay('none')} />
        <Box w="80%" display="flex" justifyContent="center">
          <Text bg="white" rounded="5px" p="10px 25px" color="#00cccc" fontSize="18px">Login / Signup</Text>
        </Box>
        </Box>
        <Box display={(categories || bestSellers)? "none" : ["flex", "flex", "none"]} gap="10px" flexDir="column" align="center" fontSize="14px" color="#1a0933" >
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box onClick={()=>handleCategories()} display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" fontSize="14px" gap="5px">
                <Icon color="#595959" boxSize="28px" as={HiMenuAlt1} />
                <Text fontSize="14px" color="#595959">Categories</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box onClick={()=>handleBestsellers()} display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={FaTag} />
                <Text color="#595959">Best Sellers</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={FaBloggerB} />
                <Text color="#595959">Blogs</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={RiCouponFill} />
                <Text color="#595959">Deals</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={AiFillGift} />
                <Text color="#595959">Gift Card</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={HiCurrencyRupee} />
                <Text color="#595959">Refer & Earn</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={FaBlackTie} />
                <Text color="#595959">HK Consult</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={BsFillChatDotsFill} />
                <Text color="#595959">Customer Support</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={CgProfile} />
                <Text color="#595959">My Profile</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
            <Box w="90%" m="auto" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" p="15px 0px" justifyContent="space-between" alignItems="center" gap="5px">
                <Icon color="#595959" boxSize="28px" as={HiOutlineLogout} />
                <Text color="#595959">Logout</Text>
              </Box>
              <Icon color="#595959" boxSize="30px" as={ChevronRightIcon} />
            </Box>
        </Box>

        <Box display={categories? "inline" : "none"} color="#595959">
          <Box onClick={()=>setCategories(!categories)} p="5px 10px" borderBottom="1px solid grey" fontSize="18px" 
          display={["flex", "flex", "none"]} justifyContent="flex-start" alignItems="center" gap="10px">
            <Icon as={ArrowBackIcon} />
            <Text>Categories</Text>
          </Box>
          <Box w="100%" m="auto" display={["flex","flex", "none"]} justifyContent="space-between">
            <Box w="35%" bg="#e6f2ff" lineHeight="40px" fontSize="14px">
              <Box color="#29a3a3" bg="white"  p="10px">
                <Link>Sports Nutrition</Link>
              </Box>
              <Box _hover={{color:"#29a3a3", bg:"white"}} p="10px">
                <Link>Vitamins & Supplements</Link>
              </Box>
              <Box _hover={{color:"#29a3a3", bg:"white"}} p="10px">
                <Link>Ayurveda & Herbs</Link>
              </Box>
              <Box _hover={{color:"#29a3a3", bg:"white"}} p="10px">
                <Link>Health Food & Drinks</Link>
              </Box>
              <Box _hover={{color:"#29a3a3", bg:"white"}} p="10px">
                <Link>Fitness</Link>
              </Box>
              <Box _hover={{color:"#29a3a3", bg:"white"}} p="10px">
                <Link>Wellness</Link>
              </Box>
            </Box>
            <Box w="62%" fontSize="18px">
              <Box className='sportsnutritiondiv'>
                <Box w="90%" m="0px" pt="3px">
                  <Box onClick={()=>setprotiensShow(!protiensShow)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Link to={'/product'}>
                    <Text m="0px" _hover={{color:"#29a3a3"}} >Proteins</Text>
                    </Link>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={protiensShow? MinusIcon : AddIcon} />
                  </Box>
                  <Box textAlign={'left'} fontSize="12px" display={protiensShow? ["inline", "inline", "none"] : "none"}>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Whey Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Beginners Whey Protein</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Whey Protein Isolate</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Raw Whey Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Plant Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein for Women</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Blends</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Casein Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Soy Proteins</Link><br/>
                  </Box>
                </Box>
                <Box w="90%" m="0px" pt="3px">
                  <Box onClick={()=>setgainerShow(!gainerShow)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}}>Gainers</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={gainerShow? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="14px" display={gainerShow? ["inline", "inline", "none"] : "none"}>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Weight Gainers</Link><br/>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Mass Gainers</Link><br/>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Herbal Weight Gainers</Link><br/>
                  </Box>
                </Box>
                <Box w="90%" m="0px" pt="3px">
                  <Box onClick={()=>setprotienfoodsShow(!protienfoodsShow)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}} >Protein Foods</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}}  as={protienfoodsShow? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="14px" display={protienfoodsShow? ["inline", "inline", "none"] : "none"}>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Peanut Butter</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Muesli</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Shakes</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Oats</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Cereals</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Granola</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Bars</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Water</Link><br/>
                  </Box>
                </Box>
                <Box w="90%" m="0px" pt="3px">
                  <Box onClick={()=>setprepostShow(!prepostShow)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}}>Pre/Post Workout</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={prepostShow? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="14px" display={prepostShow? ["inline", "inline", "none"] : "none"}>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Pre-Workout</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Creatine</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>BCAAs</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Carb Blends</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Electrolytes</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>EAA</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Nitric Oxide</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Other Supports</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Citrulline Malate</Link><br/>
                  </Box>
                </Box>
                <Box w="90%" m="0px" pt="3px">
                  <Box onClick={()=>setworkoutShow(!workoutShow)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}} >Workout Essentials</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={workoutShow? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="17px" display={workoutShow? ["inline", "inline", "none"] : "none"}>
                    <Link href='' _hover={{color:"#29a3a3"}}>Fat Burners</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Consult Services</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>L Carnitine</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Multivitamins for Bodybuilding</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Pre Hormone</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>ZMA</Link><br/>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display={bestSellers? "inline" : "none"} color="#595959">
          <Box onClick={()=>setbestSellers(!bestSellers)} p="5px 10px" borderBottom="1px solid grey" fontSize="26px" 
          display={["flex", "flex", "none"]} justifyContent="flex-start" alignItems="center" gap="10px">
            <Icon as={ArrowBackIcon} />
            <Text>Best Sellers</Text>
          </Box>
          <Box w="100%" m="auto" mt="20px" display={["inline","inline", "none"]}>
            <Box w="95%" fontSize="22px">
              <Box className='sportsnutritiondiv'>
                <Box w="85%" m="auto" pt="3px" borderBottom="1px solid grey" p="10px 0px">
                  <Box onClick={()=>setsportNutrition(!sportNutrition)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}} >Sport Nutrition</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={sportNutrition? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="19px" display={sportNutrition? ["inline", "inline", "none"] : "none"}>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Whey Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Beginners Whey Protein</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Whey Protein Isolate</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Raw Whey Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Plant Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein for Women</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Blends</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Casein Proteins</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Soy Proteins</Link><br/>
                  </Box>
                </Box>
                <Box w="85%" m="auto" pt="3px" borderBottom="1px solid grey" p="10px 0px">
                  <Box onClick={()=>sethealthNutrition(!healthNutrition)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}}>Health Nutrition</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={healthNutrition? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="19px" display={healthNutrition? ["inline", "inline", "none"] : "none"}>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Weight Gainers</Link><br/>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Mass Gainers</Link><br/>
                    <Link  to='/product' _hover={{color:"#29a3a3"}}>Herbal Weight Gainers</Link><br/>
                  </Box>
                </Box>
                <Box w="85%" m="auto" pt="3px" borderBottom="1px solid grey" p="10px 0px">
                  <Box onClick={()=>setfitness(!fitness)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}} >Fitness</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}}  as={fitness? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="19px" display={fitness? ["inline", "inline", "none"] : "none"}>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Peanut Butter</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Muesli</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Shakes</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Oats</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Cereals</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Granola</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Bars</Link><br/>
                    <Link to='/product' _hover={{color:"#29a3a3"}}>Protein Water</Link><br/>
                  </Box>
                </Box>
                <Box w="85%" m="auto" pt="3px" borderBottom="1px solid grey" p="10px 0px">
                  <Box onClick={()=>setwellness(!wellness)} display={["flex", "flex", "none"]}
                  justifyContent="space-between" alignItems="center">
                    <Text m="0px" _hover={{color:"#29a3a3"}}>Wellness</Text>
                    <Icon m="0px" _hover={{color:"#29a3a3"}} as={wellness? MinusIcon : AddIcon} />
                  </Box>
                  <Box fontSize="19px" display={wellness? ["inline", "inline", "none"] : "none"}>
                    <Link href='' _hover={{color:"#29a3a3"}}>Pre-Workout</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Creatine</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>BCAAs</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Carb Blends</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Electrolytes</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>EAA</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Nitric Oxide</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Other Supports</Link><br/>
                    <Link href='' _hover={{color:"#29a3a3"}}>Citrulline Malate</Link><br/>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
       </Flex>
      </Box>
    </Box>
  )
}

