var priceCards = document.querySelectorAll('.pricing_grid .price');
var featuresCards = document.querySelectorAll('.features_grid .feature');

import { freePlan } from '../db/pricing.js';
var pricingGrid = document.querySelector('.pricing_grid');
freePlan.forEach(plan => {
    var priceTemplate = document.querySelector('.pricing_template').content.cloneNode(true);
    priceTemplate.querySelector('.price_title').innerText = plan.name;
    // priceTemplate.querySelector('.price_desc').innerText = plan.desc;
    let card = priceTemplate.querySelector('.price');
    if (plan.emphasized)
        card.classList.add('price-emp');
    var i = 0;
    if (plan.features)
        plan.features.forEach(feature => {
            if (i) {
                var divider = document.createElement('div');
                divider.classList.add('price_divider')
                priceTemplate.querySelector('.price_features_grid').append(divider);
            }
            i++;
            var priceFeatureTemplate = priceTemplate.querySelector('.price_feature_template').content.cloneNode(true)
            priceFeatureTemplate.querySelector('.price_feature').innerText = feature.featureName;
            priceFeatureTemplate.querySelector('.price_value').innerText = feature.featureValue;
            priceTemplate.querySelector('.price_features_grid').append(priceFeatureTemplate);
        })
    i = 0;
    if (plan.feature)
        plan.feature.forEach(feature => {

            if (i) {
                var divider = document.createElement('div');
                divider.classList.add('price_divider')
                priceTemplate.querySelector('.price_features_grid').append(divider);
            }
            i++;
            var priceFeatureTemplate = priceTemplate.querySelector('.price_feature_template_single').content.cloneNode(true)
            priceFeatureTemplate.querySelector('.price_feature').innerText = feature;
            priceTemplate.querySelector('.price_features_grid').append(priceFeatureTemplate);
        })

    priceTemplate.querySelector('.price_rate').innerText = plan.price;
    priceTemplate.querySelector('.price_button').href = plan.link;
    pricingGrid.append(priceTemplate)
    console.log(priceTemplate);
})
