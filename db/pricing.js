// Have only 3 cards and emphasize the middle card.
// Have same number of features for each card, preferably 5.

export var pricingPlans = [
    {
        'id': 1,
        'emphasized': false,
        'name': 'Basic',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            'Custom domain name (only one)',
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
        'name': 'Reseller',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            'Unlimited domain support',
            'Free SSL for every domain',
            'Control Panel Reseller access',
            'SFTP/SSH access',
            'One Click WordPress, Joomla, Prestashop, Git, Magento installer',
            '24x7 Email support',
            '9am to 5pm weekdays telephone support',
            '150GB SSD'
        ],
        'price': 4000,
        'link': `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HOxmxPncdoNfkY" async> </script> </form>`,
        'data_aos': 'fade-up',
        'data_aos_delay': '200',
        'billing': 'Billed monthly'
    },
    {
        'id': 3,
        'emphasized': false,
        'name': 'Enterprise',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            'Unlimited domain support',
            'Free SSL for every domain',
            'Control Panel Admin access',
            'SFTP/SSH access',
            'One Click WordPress, Joomla, Prestashop, Git, Magento installer',
            '24x7 Email support',
            '9am to 5pm weekdays telephone support',
            '20 hour developer support per month',
            '300GB SSD'
        ],
        'price': 16000,
        'link': `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HOxmxPncdoNfkY" async> </script> </form>`,
        'data_aos': 'fade-left',
        'data_aos_delay': '400',
        'billing': 'Billed monthly'
    },

]


export var freePlan = [
    {
        'id': 0,
        'emphasized': true,
        'name': 'Free trial',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
        'feature': [
            'Subdomain of *.signifi.org',
            'Free SSL',
            'SFTP access',
            '1 database provided',
            'No support'
        ],
        'price': 0,
        'link': '#',
    }
]
