import React, { Component } from "react";

import styles from "./RegisterAd.module.css";

import RegisterSelectBox from "./RegisterSelectBox/RegisterSelectBox";

import Kilometer from "./Kilometer/Kilometer";

class RegisterAd extends Component {
  state = {
    progressValue: 5,
    brands: [
      { key: "انتخاب برند", value: 0 },
      { key: "تویوتا", value: 1 },
      { key: "لکسوس", value: 2 },
      { key: "رنو", value: 3 },
    ],
    brandValue: 0,
    brandDisabled: false,
    models: [{ key: "انتخاب مدل", value: 0 }],
    modelValue: 0,
    modelDisabled: true,
    years: [
      { key: "انتخاب سال", value: 0 },
      { key: "2020", value: 2020 },
      { key: "2019", value: 2019 },
      { key: "2018", value: 2018 },
      { key: "2017", value: 2017 },
      { key: "2016", value: 2016 },
    ],
    yearValue: 0,
    yearDisabled: true,
    tips: [
      { key: "انتخاب تیپ", value: 0 },
      { key: "sky", value: 1 },
      { key: "exclusive", value: 2 },
      { key: "station", value: 3 },
    ],
    tipValue: 0,
    tipDisabled: true,
    engines: [
      { key: "انتخاب حجم موتور", value: 0 },
      { key: "1300", value: 1300 },
      { key: "1600", value: 1600 },
      { key: "1800", value: 1800 },
      { key: "2000", value: 2000 },
    ],
    engineValue: 0,
    engineDisabled: true,
    gears: [
      { key: "انتخاب گیربکس", value: 0 },
      { key: "اتوماتیک", value: 1 },
      { key: "دستی", value: 2 },
      { key: "هر دو", value: 3 },
    ],
    gearValue: 0,
    gearDisabled: true,
    differentials: [
      { key: "انتخاب دیفرانسیل", value: 0 },
      { key: "عقب", value: 1 },
      { key: "جلو", value: 2 },
      { key: "هر دو محور", value: 3 },
    ],
    differentialValue: 0,
    differentialDisabled: true,
    fuels: [
      { key: "انتخاب سوخت", value: 0 },
      { key: "بنزینی", value: 1 },
      { key: "گازوئیلی", value: 2 },
      { key: "هیبرید", value: 3 },
      { key: "بنزینی و هیبریدی", value: 4 },
    ],
    fuelValue: 0,
    fuelDisabled: true,
  };

  brandsChangeHandler = (event) => {
    this.setState(
      {
        brandValue: event.target.value,
        modelValue: 0,
        models: [{ key: "انتخاب مدل", value: 0 }],
        modelDisabled: true,
        yearValue: 0,
        yearDisabled: true,
        tipValue: 0,
        tipDisabled: true,
        engineValue: 0,
        engineDisabled: true,
        gearValue: 0,
        gearDisabled: true,
        differentialValue: 0,
        differentialDisabled: true,
        fuelValue: 0,
        fuelDisabled: true,
      },
      () => {
        fetch(
          `http://10.1.3.89:3535/API/Sales/GetModelsByBrand/${this.state.brandValue}`
        )
          .then((res) => res.json())
          .then(
            (models) => {
              const oldBrands = this.state.models;
              let newBrands = models.map((model) => {
                return {
                  key: model["name"],
                  value: model["englishname"],
                };
              });

              let myNewBrands = [{ key: "انتخاب مدل", value: 0 }, ...newBrands];
              this.setState({
                models: myNewBrands,
              });
            },

            (error) => {
              console.log("Error ", error.message);
            }
          );
      }
    );

    if (event.target.value > 0) {
      this.props.progressValue(20);
      this.setState({
        modelDisabled: false,
      });
    } else {
      this.props.progressValue(10);
    }
  };

  modelsChangeHandler = (event) => {
    this.setState({ modelValue: event.target.value });
    this.setState({
      yearValue: 0,
      yearDisabled: true,
      tipValue: 0,
      tipDisabled: true,
      engineValue: 0,
      engineDisabled: true,
      gearValue: 0,
      gearDisabled: true,
      differentialValue: 0,
      differentialDisabled: true,
      fuelValue: 0,
      fuelDisabled: true,
    });

    if (event.target.value !== 0) {
      this.props.progressValue(30);
      this.setState({
        yearDisabled: false,
      });
    } else {
      this.props.progressValue(20);
    }
  };

  yearsChangeHandler = (event) => {
    this.setState({ yearValue: event.target.value });
    this.setState({
      tipValue: 0,
      tipDisabled: true,
      engineValue: 0,
      engineDisabled: true,
      gearValue: 0,
      gearDisabled: true,
      differentialValue: 0,
      differentialDisabled: true,
      fuelValue: 0,
      fuelDisabled: true,
    });
    if (event.target.value > 0) {
      this.props.progressValue(40);
      this.setState({
        tipDisabled: false,
      });
    } else {
      this.props.progressValue(30);
    }
  };

  tipsChangeHandler = (event) => {
    this.setState({ tipValue: event.target.value });
    this.setState({
      engineValue: 0,
      engineDisabled: true,
      gearValue: 0,
      gearDisabled: true,
      differentialValue: 0,
      differentialDisabled: true,
      fuelValue: 0,
      fuelDisabled: true,
    });

    if (event.target.value > 0) {
      this.props.progressValue(50);
      this.setState({
        engineDisabled: false,
      });
    } else {
      this.props.progressValue(40);
    }
  };

  enginesChangeHandler = (event) => {
    this.setState({ engineValue: event.target.value });
    this.setState({
      gearValue: 0,
      gearDisabled: true,
      differentialValue: 0,
      differentialDisabled: true,
      fuelValue: 0,
      fuelDisabled: true,
    });

    if (event.target.value > 0) {
      this.props.progressValue(60);
      this.setState({
        gearDisabled: false,
      });
    } else {
      this.props.progressValue(50);
    }
  };

  gearsChangeHandler = (event) => {
    this.setState({ gearValue: event.target.value });
    this.setState({
      differentialValue: 0,
      differentialDisabled: true,
      fuelValue: 0,
      fuelDisabled: true,
    });

    if (event.target.value > 0) {
      this.props.progressValue(70);
      this.setState({
        differentialDisabled: false,
      });
    } else {
      this.props.progressValue(60);
    }
  };

  differentialsChangeHandler = (event) => {
    this.setState({ differentialValue: event.target.value });
    this.setState({
      fuelValue: 0,
      fuelDisabled: true,
    });

    if (event.target.value > 0) {
      this.props.progressValue(80);
      this.setState({
        fuelDisabled: false,
      });
    } else {
      this.props.progressValue(70);
    }
  };

  fuelsChangeHandler = (event) => {
    this.setState({ fuelValue: event.target.value });
    this.setState({
      // fuelValue: 0,
      // fuelDisabled: true,
    });

    if (event.target.value > 0) {
      this.props.progressValue(90);
      this.setState({
        // fuelDisabled: false,
      });
    } else {
      this.props.progressValue(80);
    }
  };

  render() {
    return (
      <div>
        <section className={styles.BrandSection}>
          <RegisterSelectBox
            options={this.state.brands}
            changed={this.brandsChangeHandler}
            currentValue={this.state.brandValue}
            isDisabled={this.state.brandDisabled}
            isHidable={false}
          />
          <RegisterSelectBox
            options={this.state.models}
            changed={this.modelsChangeHandler}
            currentValue={this.state.modelValue}
            isDisabled={this.state.modelDisabled}
            isHidable={false}
          />
          <RegisterSelectBox
            options={this.state.years}
            changed={this.yearsChangeHandler}
            currentValue={this.state.yearValue}
            isDisabled={this.state.yearDisabled}
            isHidable={false}
          />
          <RegisterSelectBox
            options={this.state.tips}
            changed={this.tipsChangeHandler}
            currentValue={this.state.tipValue}
            isDisabled={this.state.tipDisabled}
            isHidable={false}
          />
          <div className={styles.HalfColumns}>
            <RegisterSelectBox
              options={this.state.engines}
              changed={this.enginesChangeHandler}
              currentValue={this.state.engineValue}
              isDisabled={this.state.engineDisabled}
              isHidable={true}
              display="half"
            />
            <RegisterSelectBox
              options={this.state.gears}
              changed={this.gearsChangeHandler}
              currentValue={this.state.gearValue}
              isDisabled={this.state.gearDisabled}
              isHidable={true}
              display="half"
            />
            <RegisterSelectBox
              options={this.state.differentials}
              changed={this.differentialsChangeHandler}
              currentValue={this.state.differentialValue}
              isDisabled={this.state.differentialDisabled}
              isHidable={true}
              display="half"
            />
            <RegisterSelectBox
              options={this.state.fuels}
              changed={this.fuelsChangeHandler}
              currentValue={this.state.fuelValue}
              isDisabled={this.state.fuelDisabled}
              isHidable={true}
              display="half"
            />
          </div>
        </section>
        <section className={styles.KilometerSection}>
          <Kilometer progressValue={this.props.progressValue} />
        </section>
      </div>
    );
  }
}

export default RegisterAd;
