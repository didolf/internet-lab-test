import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Menu,
  Header,
  Footer,
  Card,
  Typography,
  TextDecoration,
  List,
  ListItem,
  Button,
  Slider,
  Paragraph,
  Filter
} from "./components";
import {
  Award1Icon,
  EarthIcon,
  Award2Icon,
  EUIcon,
  MedalIcon,
  RussiaIcon
} from "./icons";
import { Theme } from "./helpers";
import cn from "classnames";

const Person = () => {
  const [hideAdvantages, setHideAdvantages] = useState(false);
  const onHideAdvantagesClick = useCallback(() => {
    setHideAdvantages(prev => !prev);
  }, []);
  return (
    <div className="Person">
      <div className="Person-LeftBorder" />
      <div className="Person-Info">
        <div className="Person-ContactInfo">
          <Typography type="h2">лоремова</Typography>
          <Typography type="h3">ипсума анатольевна</Typography>
          <Typography className="Person-Tagline" type="caption">
            lorem ipsum dolor
          </Typography>
        </div>
        <Button
          onClick={onHideAdvantagesClick}
          className="Person-HideAdvantages"
          type="grey"
        >
          {hideAdvantages ? "Показать" : "Скрыть"}
        </Button>
        {!hideAdvantages && (
          <List className="Person-Advantages" size="m">
            <ListItem>lorem ipsum dolor lorem ipsum dolor</ListItem>
            <ListItem>lorem ipsum dolor</ListItem>
            <ListItem>
              lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem
            </ListItem>
            <ListItem>lorem ipsum dolor</ListItem>
            <ListItem>lorem ipsum dolor</ListItem>
            <ListItem>lorem ipsum dolor</ListItem>
          </List>
        )}
        <Paragraph>
          <Typography type="bold">lorem ipsum dolor </Typography>
          <Typography type="regular">
            lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolorlorem ipsum dolorlorem ipsum dolor
          </Typography>
        </Paragraph>
        <Paragraph>
          <Typography type="bold">lorem ipsum dolor </Typography>
          <Typography type="regular">lorem ipsum dolor</Typography>
        </Paragraph>
      </div>
      <div className="Person-Photo">
        <img className="Person-PhotoImg" src="/potato.jpeg" />
      </div>
      <div className="Person-RightBorder" />
    </div>
  );
};
const App: React.FC = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    function updateCurrentScroll() {
      setCurrentScroll(window.scrollY);
    }
    window.addEventListener("scroll", updateCurrentScroll);
    return () => window.removeEventListener("scroll", updateCurrentScroll);
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Header
        className="App-Header"
        theme={currentScroll < 70 ? Theme.LIGHT : Theme.DARK}
      />
      <div className={cn("App-FirstBlock", "FirstBlock")}>
        <Typography className="FirstBlock-Title" type="h1">
          lorem ipsum dolor sit amet
        </Typography>
        <Typography className="FirstBlock-Description" type="headline">
          <TextDecoration type="red">lorem</TextDecoration> ipsum dolor sit amet
        </Typography>
        <List className="FirstBlock-List" size="l">
          <ListItem
            dot={
              <>
                <Award1Icon />
                <EarthIcon />{" "}
              </>
            }
          >
            <Typography type="big-title">
              <TextDecoration type="red-background">
                Lorem ipsum dol
              </TextDecoration>
            </Typography>
          </ListItem>
          <ListItem
            dot={
              <>
                <Award2Icon /> <EUIcon />
              </>
            }
          >
            <Typography type="title">Lorem ipsum</Typography>
          </ListItem>
          <ListItem
            dot={
              <>
                <MedalIcon />
                <EUIcon />{" "}
              </>
            }
          >
            <Typography type="title">lorem ipsum dolor sit amet</Typography>
          </ListItem>
          <ListItem
            dot={
              <>
                <Award2Icon />
                <RussiaIcon />
              </>
            }
          >
            <Typography type="title">Lorem ipsum</Typography>
          </ListItem>
        </List>
        <Button className="FirstBlock-ActionButton">lorem ipsum dolor</Button>
      </div>
      <div className="App-SecondBlock SecondBlock">
        <Typography className="SecondBlock-Title" center type="h2">
          второй блок
        </Typography>
        <Slider tabs={[<Person />, <Person />, <Person />]} />
      </div>
      <div className="App-ThirdBlock ThirdBlock">
        <Typography center className="ThirdBlock-Title" type="h2">
          третий блок
        </Typography>
        <Filter className="ThirdBlock-Filter" years={[2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]} />
        <div className="ThirdBlock-Cards Cards">
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/facebook.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/amazon.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/sony.jpeg"
          />
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/ae.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/facebook.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/amazon.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/sony.jpeg"
          />
          <Card
            className="Cards-Card"
            title="Lorem ipsum dolor sit amet."
            imgSrc="/ae.jpeg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            nulla interdum felis placerat vulputate.
          </Card>
        </div>
      </div>
      <Footer className="App-Footer" />
    </div>
  );
};

export default App;
