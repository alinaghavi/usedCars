import React, {Component} from 'react';

import ProgressBar from '../UI/ProgressBar/ProgressBar';

import styles from './Register.module.css';

class Register extends Component {
    render() {
        return (
            <section>
                <div className={styles.InsertNewAdContent}>
                    <ProgressBar title="ثبت آگهی خودرو در یک دقیقه" currentValue="45"/>
                </div>
            </section>
        );
    }
}
                    {/*<div className="new-ad-container">*/}
                    {/*    <div className="content">*/}
                    {/*        <section id="brands" className="sections">*/}
                    {/*            <div id="select-brand" className="select-option selected" data-hidable="false">*/}
                    {/*                <select className="new-select select-brand" id="CarBrandID"*/}
                    {/*                        name="CarBrandID">*/}
                    {/*                    <option selected="selected" value="0">انتخاب برند</option>*/}
                    {/*                    <option value="1">تویوتا</option>*/}
                    {/*                    <option value="2">لکسوس</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: inline;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-model" className="select-option selected" data-hidable="false">*/}
                    {/*                <select className="new-select select-model" id="CarModelId"*/}
                    {/*                        name="CarModelId">*/}
                    {/*                    <option selected="selected" value="0">انتخاب مدل</option>*/}
                    {/*                    <option value="50">جی تی</option>*/}
                    {/*                    <option value="100">کرولا</option>*/}
                    {/*                    <option value="150">کمری</option>*/}
                    {/*                    <option value="200">CHR</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: inline;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-year" className="select-option selected" data-hidable="false">*/}
                    {/*                <select className="new-select select-year" id="ModelYear" name="ModelYear">*/}
                    {/*                    <option selected="selected" value="0">انتخاب سال</option>*/}
                    {/*                    <option value="2020">سال 2020</option>*/}
                    {/*                    <option value="2019">سال 2019</option>*/}
                    {/*                    <option value="2018">سال 2018</option>*/}
                    {/*                    <option value="2017">سال 2017</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: inline;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-tip" className="select-option selected" data-hidable="false">*/}
                    {/*                <select className="new-select select-tip" id="CarTipId" name="CarTipId">*/}
                    {/*                    <option selected="selected" value="0">انتخاب تیپ</option>*/}
                    {/*                    <option value="10">Exclusive</option>*/}
                    {/*                    <option value="20">دو درب</option>*/}
                    {/*                    <option value="30">Sky</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: inline;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-engine" className="select-option selected" data-hidable="true">*/}
                    {/*                <select className="new-select select-engine" id="CarEngineId"*/}
                    {/*                        name="CarEngineId">*/}
                    {/*                    <option selected="selected" value="0">انتخاب حجم موتور</option>*/}
                    {/*                    <option value="1">*/}
                    {/*                        کمتر از 1300*/}
                    {/*                    </option>*/}
                    {/*                    <option value="2">*/}
                    {/*                        1300 تا 1700*/}
                    {/*                    </option>*/}
                    {/*                    <option value="3">*/}
                    {/*                        1700 تا 2000*/}
                    {/*                    </option>*/}
                    {/*                    <option value="4">*/}
                    {/*                        2000 تا 2500*/}
                    {/*                    </option>*/}
                    {/*                    <option value="5">*/}
                    {/*                        2500 به بالا*/}
                    {/*                    </option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: none;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-gear" className="select-option selected hidden"*/}
                    {/*                 data-hidable="true">*/}
                    {/*                <select className="new-select select-gear" id="CarGearId" name="CarGearId"*/}
                    {/*                        disabled="">*/}
                    {/*                    <option selected="selected" value="0">انتخاب گیربکس</option>*/}
                    {/*                    <option value="10">اتوماتیک</option>*/}
                    {/*                    <option value="20">دستی</option>*/}
                    {/*                    <option value="30">هر دو</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: none;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-differential" className="select-option selected hidden"*/}
                    {/*                 data-hidable="true">*/}
                    {/*                <select className="new-select select-differential" id="CarDifferentialId"*/}
                    {/*                        name="CarDifferentialId" disabled="">*/}
                    {/*                    <option value="0" selected="selected">انتخاب دیفرانسیل</option>*/}
                    {/*                    <option value="1">تک دیفرانسیل</option>*/}
                    {/*                    <option value="2">دو دیفرانسیل</option>*/}
                    {/*                    <option value="3">چهار چرخ محرک</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: none;"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-fuel" className="select-option selected hidden"*/}
                    {/*                 data-hidable="true">*/}
                    {/*                <select className="new-select select-fuel" id="CarFuelId" name="CarFuelId"*/}
                    {/*                        disabled="">*/}
                    {/*                    <option value="0" selected="selected">انتخاب سوخت</option>*/}
                    {/*                    <option value="1">بنزین</option>*/}
                    {/*                    <option value="2">دوگانه سوز</option>*/}
                    {/*                    <option value="3">هیبرید</option>*/}
                    {/*                    <option value="4">دیزل</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick" style="display: none;"></i>*/}
                    {/*            </div>*/}

                    {/*        </section>*/}
                    {/*        <section id="select-part-2" className="sections">*/}
                    {/*            <div id="select-bodyType" className="select-option item-grid"*/}
                    {/*                 style="display:none">*/}
                    {/*                <select className="new-select select-BodyType" data-val="true"*/}
                    {/*                        data-val-required="The CarBodyTypeID field is required."*/}
                    {/*                        id="CarBodyTypeID" name="CarBodyTypeID">*/}
                    {/*                    <option value="-1">انتخاب شاسی</option>*/}
                    {/*                    <option value="1">سدان</option>*/}
                    {/*                    <option value="2">شاسی بلند&zwnj;</option>*/}
                    {/*                    <option value="3">ون</option>*/}
                    {/*                    <option value="4">وانت</option>*/}
                    {/*                    <option value="5">كوپه</option>*/}
                    {/*                    <option value="6">کروک</option>*/}
                    {/*                    <option value="8">هاچبک</option>*/}
                    {/*                </select>*/}
                    {/*            </div>*/}
                    {/*        </section>*/}
                    {/*        <section id="car-body" className="sections">*/}
                    {/*            <div id="car-km-status" className="tabs">*/}
                    {/*                <ul>*/}
                    {/*                    <li>*/}
                    {/*                        <label className="mileage-type">*/}
                    {/*                            <input className="chk" data-val="true"*/}
                    {/*                                   data-val-required="The CarType field is required."*/}
                    {/*                                   id="CarType" name="CarType" type="radio" value="0">*/}
                    {/*                                <span>صفر</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label className="mileage-type">*/}
                    {/*                            <input className="chk" id="CarType" name="CarType" type="radio"*/}
                    {/*                                   value="1">*/}
                    {/*                                <span>کارکرده</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label className="mileage-type">*/}
                    {/*                            <input className="chk" id="CarType" name="CarType" type="radio"*/}
                    {/*                                   value="-5">*/}
                    {/*                                <span>پیش&zwnj;فروش</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label className="mileage-type">*/}
                    {/*                            <input className="chk" id="CarType" name="CarType" type="radio"*/}
                    {/*                                   value="-4">*/}
                    {/*                                <span>کارتکس</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label className="mileage-type">*/}
                    {/*                            <input className="chk" id="CarType" name="CarType" type="radio"*/}
                    {/*                                   value="-1">*/}
                    {/*                                <span>حواله</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*            <div id="car-km" className="input-text text-unit on-reset">*/}
                    {/*                <input type="tel" placeholder="کارکرد" maxLength="7" value="" id="Milage"*/}
                    {/*                       name="Milage">*/}
                    {/*                    <span>کیلومتر</span>*/}
                    {/*                    <i className="selected-tick"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="select-body-status" className="select-option on-reset">*/}
                    {/*                <select data-val="true" data-val-range="CarBodyStatusIDRange"*/}
                    {/*                        data-val-range-max="2147483647" data-val-range-min="1"*/}
                    {/*                        data-val-required="CarBodyStatusIDRequired" id="CarBodyStatusID"*/}
                    {/*                        name="CarBodyStatusID">*/}
                    {/*                    <option selected="selected" value="0">وضعیت بدنه</option>*/}
                    {/*                    <option value="1">بدون رنگ</option>*/}
                    {/*                    <option value="14">صافکاری بدون رنگ</option>*/}
                    {/*                    <option value="2">یک لکه رنگ</option>*/}
                    {/*                    <option value="12">دو لکه رنگ</option>*/}
                    {/*                    <option value="3">چند لکه رنگ</option>*/}
                    {/*                    <option value="4">گلگیر رنگ</option>*/}
                    {/*                    <option value="10">گلگیر تعویض</option>*/}
                    {/*                    <option value="16">یک درب رنگ</option>*/}
                    {/*                    <option value="17">دو درب رنگ</option>*/}
                    {/*                    <option value="18">درب تعویض</option>*/}
                    {/*                    <option value="5">کاپوت رنگ</option>*/}
                    {/*                    <option value="11">کاپوت تعویض</option>*/}
                    {/*                    <option value="6">دور رنگ</option>*/}
                    {/*                    <option value="7">کامل رنگ</option>*/}
                    {/*                    <option value="8">تصادفی</option>*/}
                    {/*                    <option value="13">اتاق تعویض</option>*/}
                    {/*                    <option value="15">سوخته</option>*/}
                    {/*                    <option value="9">اوراقی</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick"></i>*/}
                    {/*            </div>*/}
                    {/*        </section>*/}
                    {/*        <section id="select-part-4" className="sections">*/}
                    {/*            <div id="new-ad-desc" className="textarea">*/}
                    {/*                        <textarea placeholder="توضیحات" maxLength="500" id="Description"*/}
                    {/*                                  name="Description"></textarea>*/}
                    {/*            </div>*/}
                    {/*            <div id="desc-counter"> تعداد کاراکتر باقی مانده : <span name="countchars"*/}
                    {/*                                                                     id="countchars">500</span>*/}
                    {/*            </div>*/}

                    {/*            <div id="num-plate" className="label-checkbox">*/}
                    {/*                <input type="checkbox" data-val="true"*/}
                    {/*                       data-val-required="The IsFreeZone field is required." id="IsFreeZone"*/}
                    {/*                       name="IsFreeZone" value="true">*/}
                    {/*                    <label htmlFor="IsFreeZone">*/}
                    {/*                        <span>منطقه آزاد</span>*/}
                    {/*                    </label>*/}
                    {/*            </div>*/}
                    {/*            <div id="first-content-box" className="content-box">*/}
                    {/*                <h3>توضیحات</h3>*/}
                    {/*                <p>*/}
                    {/*                    طبق آمار «باما» خریداران <strong>سه برابر</strong> بیشتر با*/}
                    {/*                    آگهی&zwnj;های با توضیحات کامل، تماس می&zwnj;گیرند.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div id="select-color-body" className="select-option on-reset">*/}
                    {/*                <select className="new-select select-color-body" data-val="true"*/}
                    {/*                        data-val-required="The خارجی رنگ field is required."*/}
                    {/*                        id="ExteriorColor" name="ExteriorColor">*/}
                    {/*                    <option selected="selected" value="-1">رنگ بدنه</option>*/}
                    {/*                    <option value="5">سفید</option>*/}
                    {/*                    <option value="6">مشکی</option>*/}
                    {/*                    <option value="15">خاکستری</option>*/}
                    {/*                    <option value="29">نقره ای</option>*/}
                    {/*                    <option value="40">سفید صدفی</option>*/}
                    {/*                    <option value="30">نوک مدادی</option>*/}
                    {/*                    <option value="25">قهوه ای</option>*/}
                    {/*                    <option value="1">آبی</option>*/}
                    {/*                    <option value="2">قرمز</option>*/}
                    {/*                    <option value="20">سرمه ای</option>*/}
                    {/*                    <option value="12">بژ</option>*/}
                    {/*                    <option value="19">سربی</option>*/}
                    {/*                    <option value="43">تیتانیوم</option>*/}
                    {/*                    <option value="31">یشمی</option>*/}
                    {/*                    <option value="42">کربن بلک</option>*/}
                    {/*                    <option value="17">زرد</option>*/}
                    {/*                    <option value="8">آلبالویی</option>*/}
                    {/*                    <option value="27">مسی</option>*/}
                    {/*                    <option value="11">بادمجانی</option>*/}
                    {/*                    <option value="3">سبز</option>*/}
                    {/*                    <option value="37">دلفینی</option>*/}
                    {/*                    <option value="28">نقرآبی</option>*/}
                    {/*                    <option value="45">ذغالی</option>*/}
                    {/*                    <option value="34">زیتونی</option>*/}
                    {/*                    <option value="22">طلائی</option>*/}
                    {/*                    <option value="33">طوسی</option>*/}
                    {/*                    <option value="4">نارنجی</option>*/}
                    {/*                    <option value="26">کرم</option>*/}
                    {/*                    <option value="18">زرشکی</option>*/}
                    {/*                    <option value="10">اطلسی</option>*/}
                    {/*                    <option value="38">گیلاسی</option>*/}
                    {/*                    <option value="24">عنابی</option>*/}
                    {/*                    <option value="36">برنز</option>*/}
                    {/*                    <option value="13">بنفش</option>*/}
                    {/*                    <option value="16">خاکی</option>*/}
                    {/*                    <option value="14">پوست پیازی</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick"></i>*/}
                    {/*            </div>*/}
                    {/*            <div id="select-color-interior" className="select-option on-reset">*/}
                    {/*                <select className="new-select select-color-interior" data-val="true"*/}
                    {/*                        data-val-required="The کشور رنگ field is required."*/}
                    {/*                        id="InteriorColor" name="InteriorColor">*/}
                    {/*                    <option selected="selected" value="-1">رنگ داخل</option>*/}
                    {/*                    <option value="6">مشکی</option>*/}
                    {/*                    <option value="26">کرم</option>*/}
                    {/*                    <option value="33">طوسی</option>*/}
                    {/*                    <option value="32">مارون</option>*/}
                    {/*                    <option value="41">موکا</option>*/}
                    {/*                    <option value="15">خاکستری</option>*/}
                    {/*                    <option value="2">قرمز</option>*/}
                    {/*                    <option value="25">قهوه ای</option>*/}
                    {/*                    <option value="35">شتری</option>*/}
                    {/*                    <option value="5">سفید</option>*/}
                    {/*                    <option value="20">سرمه ای</option>*/}
                    {/*                    <option value="4">نارنجی</option>*/}
                    {/*                    <option value="1">آبی</option>*/}
                    {/*                    <option value="30">نوک مدادی</option>*/}
                    {/*                    <option value="12">بژ</option>*/}
                    {/*                    <option value="18">زرشکی</option>*/}
                    {/*                    <option value="29">نقره ای</option>*/}
                    {/*                    <option value="37">دلفینی</option>*/}
                    {/*                    <option value="34">زیتونی</option>*/}
                    {/*                    <option value="45">ذغالی</option>*/}
                    {/*                    <option value="16">خاکی</option>*/}
                    {/*                    <option value="27">مسی</option>*/}
                    {/*                    <option value="40">سفید صدفی</option>*/}
                    {/*                </select>*/}
                    {/*                <i className="selected-tick"></i>*/}
                    {/*            </div>*/}
                    {/*        </section>*/}
                    {/*        <section id="price-car" className="sections">*/}
                    {/*            <div id="payment" className="tabs">*/}
                    {/*                <ul>*/}
                    {/*                    <li>*/}
                    {/*                        <label>*/}
                    {/*                            <input name="InstallmentSale" type="radio" value="0" checked="">*/}
                    {/*                                <span>مقطوع</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label>*/}
                    {/*                            <input name="InstallmentSale" type="radio" value="2">*/}
                    {/*                                <span>توافقی</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                    <li>*/}
                    {/*                        <label>*/}
                    {/*                            <input name="InstallmentSale" type="radio" value="1">*/}
                    {/*                                <span>اقساطی</span>*/}
                    {/*                        </label>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*            <div id="new-ad-price" className="input-text text-unit on-reset">*/}
                    {/*                <input type="tel" placeholder="قیمت" maxLength="14"*/}
                    {/*                       onKeyUp="document.getElementById('price-letters').innerHTML = Num2persian(this.value) + ' تومان ' "*/}
                    {/*                       id="Price" name="Price" value="">*/}
                    {/*                    <span>تومان</span>*/}
                    {/*                    <p id="price-letters"></p>*/}
                    {/*                    <i className="selected-tick"></i>*/}
                    {/*            </div>*/}
                    {/*            <div id="agreed-price" className="input-text text-unit" style="display: none;">*/}
                    {/*                <input id="agreed-input" type="text" placeholder="قیمت توافقی" disabled="">*/}
                    {/*                    <span>تومان</span>*/}
                    {/*            </div>*/}
                    {/*            <div id="instalment">*/}
                    {/*                <div id="pre-pay" className="input-text text-unit on-reset">*/}
                    {/*                    <input placeholder="پیش پرداخت" type="text" id="strDownPayment"*/}
                    {/*                           name="strDownPayment" value="">*/}
                    {/*                        <span>تومان</span>*/}
                    {/*                </div>*/}
                    {/*                <div id="instalment-amount" className="input-text text-unit on-reset">*/}
                    {/*                    <input placeholder="مبلغ هر قسط" type="text" id="strMonthlyPayment"*/}
                    {/*                           name="strMonthlyPayment" value="">*/}
                    {/*                        <span>تومان</span>*/}
                    {/*                </div>*/}
                    {/*                <div id="pre-pay-alt" className="input-text text-unit">*/}
                    {/*                    <input placeholder="پیش پرداخت دوم (اختیاری)" type="text"*/}
                    {/*                           id="strDownPaymentSecondary" name="strDownPaymentSecondary"*/}
                    {/*                           value="">*/}
                    {/*                        <span>تومان</span>*/}
                    {/*                </div>*/}
                    {/*                <div id="instalment-num" className="select-option on-reset">*/}
                    {/*                    <select className="new-select instalment-num" id="NumberOfInstallment"*/}
                    {/*                            name="NumberOfInstallment">*/}
                    {/*                        <option value="0">تعداد اقساط</option>*/}
                    {/*                        <option value="2">قسط دوم</option>*/}
                    {/*                        <option value="3">3 اقساط</option>*/}
                    {/*                        <option value="4">4 اقساط</option>*/}
                    {/*                        <option value="5">5 اقساط</option>*/}
                    {/*                        <option value="6">6 اقساط</option>*/}
                    {/*                        <option value="7">7 اقساط</option>*/}
                    {/*                        <option value="8">8 اقساط</option>*/}
                    {/*                        <option value="9">9 اقساط</option>*/}
                    {/*                        <option value="10">10 اقساط</option>*/}
                    {/*                        <option value="11">11 اقساط</option>*/}
                    {/*                        <option value="12">12 اقساط</option>*/}
                    {/*                        <option value="13">13 اقساط</option>*/}
                    {/*                        <option value="14">14 اقساط</option>*/}
                    {/*                        <option value="15">15 اقساط</option>*/}
                    {/*                        <option value="16">16 اقساط</option>*/}
                    {/*                        <option value="17">17 اقساط</option>*/}
                    {/*                        <option value="18">18 اقساط</option>*/}
                    {/*                        <option value="19">19 اقساط</option>*/}
                    {/*                        <option value="20">20 اقساط</option>*/}
                    {/*                        <option value="21">21 اقساط</option>*/}
                    {/*                        <option value="22">22 اقساط</option>*/}
                    {/*                        <option value="23">23 اقساط</option>*/}
                    {/*                        <option value="24">24 اقساط</option>*/}
                    {/*                        <option value="25">25 اقساط</option>*/}
                    {/*                        <option value="26">26 اقساط</option>*/}
                    {/*                        <option value="27">27 اقساط</option>*/}
                    {/*                        <option value="28">28 اقساط</option>*/}
                    {/*                        <option value="29">29 اقساط</option>*/}
                    {/*                        <option value="30">30 اقساط</option>*/}
                    {/*                        <option value="31">31 اقساط</option>*/}
                    {/*                        <option value="32">32 اقساط</option>*/}
                    {/*                        <option value="33">33 اقساط</option>*/}
                    {/*                        <option value="34">34 اقساط</option>*/}
                    {/*                        <option value="35">35 اقساط</option>*/}
                    {/*                        <option value="36">36 اقساط</option>*/}
                    {/*                        <option value="37">37 اقساط</option>*/}
                    {/*                        <option value="38">38 اقساط</option>*/}
                    {/*                        <option value="39">39 اقساط</option>*/}
                    {/*                        <option value="40">40 اقساط</option>*/}
                    {/*                        <option value="41">41 اقساط</option>*/}
                    {/*                        <option value="42">42 اقساط</option>*/}
                    {/*                        <option value="43">43 اقساط</option>*/}
                    {/*                        <option value="44">44 اقساط</option>*/}
                    {/*                        <option value="45">45 اقساط</option>*/}
                    {/*                        <option value="46">46 اقساط</option>*/}
                    {/*                        <option value="47">47 اقساط</option>*/}
                    {/*                        <option value="48">48 اقساط</option>*/}
                    {/*                        <option value="49">49 اقساط</option>*/}
                    {/*                        <option value="50">50 اقساط</option>*/}
                    {/*                        <option value="51">51 اقساط</option>*/}
                    {/*                        <option value="52">52 اقساط</option>*/}
                    {/*                        <option value="53">53 اقساط</option>*/}
                    {/*                        <option value="54">54 اقساط</option>*/}
                    {/*                        <option value="55">55 اقساط</option>*/}
                    {/*                        <option value="56">56 اقساط</option>*/}
                    {/*                        <option value="57">57 اقساط</option>*/}
                    {/*                        <option value="58">58 اقساط</option>*/}
                    {/*                        <option value="59">59 اقساط</option>*/}
                    {/*                        <option value="60">60 اقساط</option>*/}
                    {/*                    </select>*/}
                    {/*                </div>*/}
                    {/*                <div id="delivery-time" className="select-option on-reset">*/}
                    {/*                    <select className="new-select delivery-time" id="DeliveryInDays"*/}
                    {/*                            name="DeliveryInDays">*/}
                    {/*                        <option value="0">زمان تحویل</option>*/}
                    {/*                        <option value="1">1 روز</option>*/}
                    {/*                        <option value="7">7 روز</option>*/}
                    {/*                        <option value="12">12 روز</option>*/}
                    {/*                        <option value="15">15 روز</option>*/}
                    {/*                        <option value="20">20 روز</option>*/}
                    {/*                        <option value="30">30 روز</option>*/}
                    {/*                        <option value="45">45 روز</option>*/}
                    {/*                        <option value="60">60 روز</option>*/}
                    {/*                        <option value="90">90 روز</option>*/}
                    {/*                        <option value="99">چند روز</option>*/}
                    {/*                        <option value="120">120 روز</option>*/}
                    {/*                    </select>*/}
                    {/*                </div>*/}
                    {/*                <div id="payment-due" className="select-option on-reset">*/}
                    {/*                    <select className="new-select payment-due" id="NumberOfMonth"*/}
                    {/*                            name="NumberOfMonth">*/}
                    {/*                        <option value="0">موعد پرداخت</option>*/}
                    {/*                        <option value="1">ماهیانه</option>*/}
                    {/*                        <option value="2">ماه 2</option>*/}
                    {/*                        <option value="3">ماه 3</option>*/}
                    {/*                        <option value="4">ماه 4</option>*/}
                    {/*                        <option value="5">ماه 5</option>*/}
                    {/*                        <option value="6">ماه 6</option>*/}
                    {/*                    </select>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </section>*/}
                    {/*        <section id="login-section">*/}
                    {/*            <div id="insert-ad-login" style="display: block;">*/}
                    {/*                <div id="enter-mobile" className="login-box input-text not-entered">*/}
                    {/*                    <div className="login-box-title">*/}
                    {/*                        <h3>شماره موبایل خود را وارد کنید:</h3>*/}
                    {/*                        <h4><a href="#" id="login-with-email" className="cyan">با ایمیل وارد*/}
                    {/*                            شوید</a></h4>*/}
                    {/*                        <p id="errorusername"></p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-input">*/}

                    {/*                        <input type="text" autoComplete="false" name="hidden"*/}
                    {/*                               style="display:none">*/}
                    {/*                            <div>*/}
                    {/*                                <input id="txt-cell-number" type="tel"*/}
                    {/*                                       placeholder="مثال: 09121234567" maxLength="11"*/}
                    {/*                                       value="" autoComplete="off">*/}
                    {/*                            </div>*/}
                    {/*                            <input name="CSRF-TOKEN-BAMA-FORM" type="hidden"*/}
                    {/*                                   value="CfDJ8AKbnxVWHiRFiAF10IlSVpbK8iQhvG37fDNyk9fJ47G-2Td5V1G2KbeuVwUkz4bMfn94ajiAroYiRsA9KDIok1a70KRDTaxSX3B_OEgRPxkp4jN_IpkC20d1Ob4pCoN3sKcCJ8Frc436t7ag9Bd9zz0">*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-cta">*/}
                    {/*                        <button id="enter-mobile-cta" type="submit">ورود</button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="enter-mobile-pass" className="login-box input-text entered">*/}
                    {/*                    <div className="entered-mobile-user">*/}
                    {/*                        <p className="entered-phone-label"></p>*/}
                    {/*                        <h4 className="change-number"><a href="#"*/}
                    {/*                                                         className="change-number-anchor cyan">تغییر</a>*/}
                    {/*                        </h4>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-title">*/}
                    {/*                        <h3>رمز عبور خود را وارد کنید:</h3>*/}
                    {/*                        <h4><a href="#" id="recovery-password" className="cyan">بازیابی رمز*/}
                    {/*                            عبور</a></h4>*/}

                    {/*                        <input type="hidden" id="entered-phone-hidden" value="">*/}
                    {/*                            <p id="errorusername"></p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-input">*/}

                    {/*                        <input type="text" autoComplete="false" name="hidden"*/}
                    {/*                               style="display:none">*/}
                    {/*                            <div>*/}
                    {/*                                <input type="password" id="txt-pass" placeholder="رمز عبور"*/}
                    {/*                                       value="" autoComplete="false">*/}
                    {/*                            </div>*/}
                    {/*                            <input name="CSRF-TOKEN-BAMA-FORM" type="hidden"*/}
                    {/*                                   value="CfDJ8AKbnxVWHiRFiAF10IlSVpbK8iQhvG37fDNyk9fJ47G-2Td5V1G2KbeuVwUkz4bMfn94ajiAroYiRsA9KDIok1a70KRDTaxSX3B_OEgRPxkp4jN_IpkC20d1Ob4pCoN3sKcCJ8Frc436t7ag9Bd9zz0">*/}

                    {/*                    </div>*/}
                    {/*                    <div className="login-box-cta">*/}
                    {/*                        <button id="enter-mobile-pass-cta" type="submit">ورود</button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="enter-email" className="login-box input-text not-entered">*/}
                    {/*                    <div className="login-box-title">*/}
                    {/*                        <h3>ایمیل خود را وارد کنید:</h3>*/}
                    {/*                        <input type="hidden" id="entered-email-hidden" value="">*/}
                    {/*                            <h4><a href="#" id="login-with-mobile" className="cyan">با*/}
                    {/*                                موبایل وارد شوید</a></h4>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-input">*/}
                    {/*                        <input type="email" id="txt-email" placeholder="ایمیل" value="">*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-cta">*/}

                    {/*                        <button id="enter-email-cta" type="submit">ورود</button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="enter-email-pass" className="login-box input-text entered">*/}
                    {/*                    <div className="entered-mobile-user">*/}
                    {/*                        <p className="entered-email-label"></p>*/}
                    {/*                        <h4 className="change-number"><a href="#"*/}
                    {/*                                                         className="change-number-anchor cyan">تغییر</a>*/}
                    {/*                        </h4>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-title">*/}
                    {/*                        <h3>رمز عبور خود را وارد کنید:</h3>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-input">*/}
                    {/*                        <input type="password" id="txt-email-pass" placeholder="رمز عبور"*/}
                    {/*                               value="">*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-cta">*/}
                    {/*                        <button id="enter-email-pass-cta" type="submit">ورود</button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="enter-mobile-code" className="login-box input-text entered">*/}
                    {/*                    <div className="entered-mobile-user">*/}
                    {/*                        <p className="entered-phone-label"></p>*/}
                    {/*                        <h4 className="change-number"><a href="#"*/}
                    {/*                                                         className="change-number-anchor cyan">تغییر</a>*/}
                    {/*                        </h4>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-title">*/}
                    {/*                        <h3>کد 4 رقمی را وارد کنید:</h3>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-input">*/}
                    {/*                        <input type="tel" maxLength="1" id="txt-otp-4" placeholder=""*/}
                    {/*                               value="">*/}
                    {/*                            <input type="tel" maxLength="1" id="txt-otp-3" placeholder=""*/}
                    {/*                                   value="">*/}
                    {/*                                <input type="tel" maxLength="1" id="txt-otp-2"*/}
                    {/*                                       placeholder="" value="">*/}
                    {/*                                    <input type="tel" maxLength="1" id="txt-otp-1"*/}
                    {/*                                           placeholder="" value="">*/}
                    {/*                    </div>*/}
                    {/*                    <div className="login-box-cta">*/}
                    {/*                        <h4><a id="re-send-code" href="#" className="cyan">ارسال کد تایید*/}
                    {/*                            مجدد</a></h4>*/}
                    {/*                        <button id="enter-mobile-code-cta" type="submit">ادامه</button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="enter-new-pass" className="login-box input-text entered">*/}
                    {/*                    <div className="entered-mobile-user">*/}
                    {/*                        <p className="entered-phone-label"></p>*/}
                    {/*                        <h4 className="change-number"><a href="#"*/}
                    {/*                                                         className="change-number-anchor cyan">تغییر</a>*/}
                    {/*                        </h4>*/}
                    {/*                    </div>*/}
                    {/*                    <input type="hidden" id="o-t" value="">*/}
                    {/*                        <div className="login-box-title">*/}
                    {/*                            <h3>رمز عبور جدید خود را وارد کنید:</h3>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="login-box-input">*/}
                    {/*                            <input type="password" id="new-pass"*/}
                    {/*                                   placeholder=" رمز عبور جدید " value="">*/}
                    {/*                                <input type="password" id="re-new-pass"*/}
                    {/*                                       placeholder=" رمز عبور مجدد وارد کنید" value="">*/}
                    {/*                        </div>*/}
                    {/*                        <div className="login-box-cta">*/}
                    {/*                            <button id="enter-new-pass-cta" type="submit">ورود</button>*/}
                    {/*                        </div>*/}
                    {/*                </div>*/}
                    {/*                <div id="error-section">*/}
                    {/*                    <div className="login-box-error">*/}
                    {/*                        <svg xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"*/}
                    {/*                             id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"*/}
                    {/*                             style="enable-background:new 0 0 512 512;" xml:space="preserve"*/}
                    {/*                             width="20px" height="20px" className="">*/}
                    {/*                        <g>*/}
                    {/*                        <g>*/}
                    {/*                        <g>*/}
                    {/*                        <path*/}
                    {/*                            d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"*/}
                    {/*                            data-original="#000000" className="active-path" data-old_color="#000000"*/}
                    {/*                            fill="#DF0F0A"></path>*/}



                    {/*                            </g>*/}
                    {/*                        </g>*/}
                    {/*                            <g>*/}
                    {/*                        <g>*/}
                    {/*                        <path*/}
                    {/*                            d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"*/}
                    {/*                            data-original="#000000" className="active-path" data-old_color="#000000"*/}
                    {/*                            fill="#DF0F0A"></path>*/}



                    {/*                            </g>*/}
                    {/*                        </g>*/}
                    {/*                            <g>*/}
                    {/*                        <g>*/}
                    {/*                        <circle cx="256" cy="349.16" r="27" data-original="#000000"*/}
                    {/*                                className="active-path" data-old_color="#000000"*/}
                    {/*                                fill="#DF0F0A"></circle>*/}



                    {/*                            </g>*/}
                    {/*                        </g>*/}
                    {/*                    </g>*/}
                    {/*                </svg>*/}
                    {/*                        <p id="error-message"></p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <i className="selected-tick"></i>*/}
                    {/*            </div>*/}
                    {/*            <div id="success-login" style="display: none;">*/}
                    {/*                <p></p>*/}
                    {/*                <a href="#" id="change-login-num" className="cyan">تغییر</a>*/}
                    {/*                <i className="selected-tick"></i>*/}
                    {/*            </div>*/}

                    {/*            <div id="corp-mobile-number" className="tabs">*/}
                    {/*            </div>*/}

                    {/*            <section id="last-part" style="display: none;">*/}
                    {/*                <div id="select-province" className="select-option">*/}
                    {/*                    <select className="new-select select-province" data-val="true"*/}
                    {/*                            data-val-range="ProvinceIdRange" data-val-range-max="2147483647"*/}
                    {/*                            data-val-range-min="1" data-val-required="ProvinceIdRequired"*/}
                    {/*                            id="ProvinceId" name="ProvinceId">*/}
                    {/*                        <option value="0">استان</option>*/}
                    {/*                        <option value="4">اردبیل</option>*/}
                    {/*                        <option value="5">اصفهان</option>*/}
                    {/*                        <option value="30">البرز</option>*/}
                    {/*                        <option value="6">ایلام</option>*/}
                    {/*                        <option value="2">آذربایجان شرقی</option>*/}
                    {/*                        <option value="3">آذربایجان غربی</option>*/}
                    {/*                        <option value="7">بوشهر</option>*/}
                    {/*                        <option value="1">تهران</option>*/}
                    {/*                        <option value="9">چهارمحال و بختیاری</option>*/}
                    {/*                        <option value="35">خراسان جنوبی</option>*/}
                    {/*                        <option value="34">خراسان رضوی</option>*/}
                    {/*                        <option value="33">خراسان شمالی</option>*/}
                    {/*                        <option value="11">خوزستان</option>*/}
                    {/*                        <option value="12">زنجان</option>*/}
                    {/*                        <option value="13">سمنان</option>*/}
                    {/*                        <option value="14">سیستان و بلوچستان</option>*/}
                    {/*                        <option value="15">فارس</option>*/}
                    {/*                        <option value="16">قزوین</option>*/}
                    {/*                        <option value="17">قم</option>*/}
                    {/*                        <option value="18">کردستان</option>*/}
                    {/*                        <option value="19">کرمان</option>*/}
                    {/*                        <option value="20">کرمانشاه</option>*/}
                    {/*                        <option value="21">کهکیلویه و بویراحمد</option>*/}
                    {/*                        <option value="22">گلستان</option>*/}
                    {/*                        <option value="23">گیلان</option>*/}
                    {/*                        <option value="24">لرستان</option>*/}
                    {/*                        <option value="25">مازندران</option>*/}
                    {/*                        <option value="26">مرکزی</option>*/}
                    {/*                        <option value="27">هرمزگان</option>*/}
                    {/*                        <option value="28">همدان</option>*/}
                    {/*                        <option value="29">یزد</option>*/}
                    {/*                    </select>*/}
                    {/*                    <i className="selected-tick"></i>*/}

                    {/*                </div>*/}
                    {/*                <div id="select-city" className="select-option">*/}
                    {/*                    <select className="new-select select-city" data-val="true"*/}
                    {/*                            data-val-required="CityIdRequired" id="CityId" name="CityId">*/}
                    {/*                        <option value="0">شهر</option>*/}
                    {/*                    </select>*/}
                    {/*                    <i className="selected-tick"></i>*/}

                    {/*                </div>*/}
                    {/*                <div id="locality" className="input-text locality">*/}
                    {/*                    <input type="text" placeholder="محله بازدید" autoComplete="off"*/}
                    {/*                           readOnly="" onFocus="this.removeAttribute('readonly');"*/}
                    {/*                           id="UserArea" name="UserArea" value="">*/}
                    {/*                        <i className="selected-tick"></i>*/}
                    {/*                </div>*/}
                    {/*                <div className="select-img">*/}
                    {/*                    <input type="file" accept="image/jpeg , image/png" multiple=""*/}
                    {/*                           name="Images" id="Images" className="fileup">*/}
                    {/*                        <label htmlFor="Images">*/}
                    {/*                            <svg id="b42f5186-0502-48cc-b9c9-1b1f9c484964"*/}
                    {/*                                 data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                                 width="11.38mm" height="8.29mm" viewBox="0 0 32.25 23.5">*/}
                    {/*                                <defs>*/}
                    {/*                                    <style>*/}
                    {/*                                        .a361448b-42e5-453e-b154-eb2e21b60de3 {*/}
                    {/*                                        fill: none;*/}
                    {/*                                        stroke: #2cb4ad;*/}
                    {/*                                        stroke-miterlimit: 10;*/}
                    {/*                                    }*/}

                    {/*                                        .\33 65c6e03-3e89-4289-826b-8ee81d7d5381 {*/}
                    {/*                                        fill: #2cb4ad;*/}
                    {/*                                    }*/}
                    {/*                                    </style>*/}
                    {/*                                </defs>*/}
                    {/*                                <title>افزودن عکس</title>*/}
                    {/*                                <path className="a361448b-42e5-453e-b154-eb2e21b60de3"*/}
                    {/*                                      d="M17.61,16.38c-.92,0-12.59,0-12.59,0H4.41a1.81,1.81,0,0,1-1.71-1.9V5.13A1.56,1.56,0,0,1,4.27,3.56H7.54a1.71,1.71,0,0,0,.7-.3l1.2-1.12a1.93,1.93,0,0,1,1.42-.7c.84,0,4.73,0,4.73,0A2.07,2.07,0,0,1,17,1.91c.5.53,1.51,1.35,1.51,1.35s.19.27,1,.25,2.91,0,2.91,0a1.86,1.86,0,0,1,1.62,1.93c.06,1.78,0,3.54,0,3.54"></path>*/}
                    {/*                                <circle className="a361448b-42e5-453e-b154-eb2e21b60de3"*/}
                    {/*                                        cx="13.21" cy="9.64" r="3.71"></circle>*/}
                    {/*                                <circle className="365c6e03-3e89-4289-826b-8ee81d7d5381"*/}
                    {/*                                        cx="21.73" cy="5.73" r="0.85"></circle>*/}
                    {/*                                <circle className="a361448b-42e5-453e-b154-eb2e21b60de3"*/}
                    {/*                                        cx="23.61" cy="14.84" r="5.93"></circle>*/}
                    {/*                                <line className="a361448b-42e5-453e-b154-eb2e21b60de3"*/}
                    {/*                                      x1="23.47" y1="12.39" x2="23.47" y2="17.57"></line>*/}
                    {/*                                <line className="a361448b-42e5-453e-b154-eb2e21b60de3"*/}
                    {/*                                      x1="20.7" y1="14.95" x2="26.23" y2="14.95"></line>*/}
                    {/*                            </svg>*/}
                    {/*                            <span>انتخاب عکس</span>*/}
                    {/*                        </label>*/}
                    {/*                        <p> (تا 4 عکس و هر عکس حداکثر 10 مگابایت)</p>*/}
                    {/*                </div>*/}
                    {/*                <div id="dvImg" className="image-carousel">*/}
                    {/*                </div>*/}
                    {/*                <div id="third-content-box" className="content-box">*/}
                    {/*                    <h3>عکس</h3>*/}
                    {/*                    <p>*/}
                    {/*                        با اضافه کردن عکس، بازدید آگهی خود را*/}
                    {/*                        تا <strong> %70</strong> افزایش دهید.*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*                <input type="hidden" data-val="true"*/}
                    {/*                       data-val-required="The IsImage field is required." id="IsImage"*/}
                    {/*                       name="IsImage" value="False">*/}
                    {/*                    <input type="hidden" id="DeletedImageName" name="DeletedImageName"*/}
                    {/*                           value="">*/}

                    {/*            </section>*/}
                    {/*        </section>*/}

                    {/*        <section id="sell-cta">*/}
                    {/*            <div className="text-cta">*/}
                    {/*                <p>*/}
                    {/*                    کلیک روی این دکمه به منزله تایید صحت موارد انتخاب شده، پذیرش مسئولیت*/}
                    {/*                    آگهی و همچنین مطالعه <a href="/terms" className="cyan">قوانین و*/}
                    {/*                    مقررات</a>*/}
                    {/*                    «باما» خواهد بود.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="btn-cta">*/}
                    {/*                <button id="sell-btn-cta" type="submit">ادامـــــه</button>*/}
                    {/*            </div>*/}
                    {/*        </section>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


    export default Register;
