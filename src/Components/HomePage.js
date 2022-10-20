import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Tabs from './Tabs'
import Stepper from './Stepper'
import { Drawer } from '@mui/material';
import { useSelector } from 'react-redux';
function HomePage() {
  const header = useSelector(state => state.header)
  const navigationTabs = useSelector(state => state.navigationTabs)
  const footer = useSelector(state => state.footer)
  
  const [openDrawerLeft, setOpenDrawerLeft] = useState(false)
  const [openDrawerRight, setOpenDrawerRight] = useState(false)

  const toogleDrawerRight = (open) => {
    setOpenDrawerRight(open)
  }

  const toogleDrawerLeft = (open) => {
    setOpenDrawerLeft(open)
  }

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={openDrawerLeft}
        onClose={() => toogleDrawerLeft(false)}
        PaperProps={{ style: { width: "200px" } }}
      >
        hello
      </Drawer>
      <Drawer
        anchor={"right"}
        open={openDrawerRight}
        onClose={() => toogleDrawerRight(false)}
        PaperProps={{ style: { width: "200px" } }}
      >
        hello
      </Drawer>
      {header ? <Header toogleDrawerRight={toogleDrawerRight} toogleDrawerLeft={toogleDrawerLeft} /> : <></>}

      {navigationTabs ? <Tabs /> : <></>}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "95vw", marginTop: 40 }}>
        <Stepper />
      </div>
      {footer ? <Footer toogleDrawerRight={toogleDrawerRight} toogleDrawerLeft={toogleDrawerLeft} />:<></>}
    </div>
  );
}
export default HomePage