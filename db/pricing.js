// Have only 3 cards and emphasize the middle card.
// Have same number of features for each card, preferably 5.

export var pricingPlans = [
    {
        'id': 1,
        'emphasized': false,
        'name': 'Basic',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            '1 Domain',
            'Free SSL',
            'Control Panel access',
            'SFTP access',
            'One Click WordPress, Joomla, Prestashop, Git, Magento installer',
            '24x7 Email support',
            '5GB SSD'
        ],
        'price': 150,
        'link': `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HOxmxPncdoNfkY" async> </script> </form>`,
        'data_aos': 'fade-right',
        'data_aos_delay': '400',
        'billing': 'Billed annually'
    },
    {
        'id': 2,
        'emphasized': true,
        'name': 'Developer',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            '5 Domains at ₹125 per domain per month',
            'Free SSL',
            'Control Panel access',
            'SFTP access',
            'One Click WordPress, Joomla, Prestashop, Git, Magento installer',
            '24x7 Email support',
            '25GB SSD (unified)'
        ],
        'price': 625,
        'link': `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HegVbLm1XwSqQE" async> </script> </form>`,
        'data_aos': 'fade-up',
        'data_aos_delay': '200',
        'billing': 'Billed annually'
    },
    {
        'id': 3,
        'emphasized': false,
        'name': 'Advanced',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            '10 Domains at ₹100 per domain per month',
            'Free SSL',
            'Control Panel access',
            'SFTP access',
            'One Click WordPress, Joomla, Prestashop, Git, Magento installer',
            '24x7 Email support',
            '50GB SSD (unified)'
        ],
        'price': 1000,
        'link': `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HegXHwocYjJAxB" async> </script> </form>`,
        'data_aos': 'fade-left',
        'data_aos_delay': '400',
        'billing': 'Billed annually'
    },

]

