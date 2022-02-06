# Billing by [Gavin Pereira](https://gavinpereira.in)

## Details

To send out invoices to my freelance clients, I had to manually edit an Illustrator PDF template and mail it to them. By means of this project, I am able to create invoices in Contentful and only send the link to the client.

## Features

- View invoice
- Print invoice as PDF
- Save invoice as image
- Pay invoice by scanning QR code
- Pay invoice by clicking on QR code (as long as device has a UPI application installed)

## Demo invoices

- [B22020601](https://bills.gavinpereira.in/B22020601) - An invoice that has no discount and is paid
- [B22020602](https://bills.gavinpereira.in/B22020602) - An invoice that has discount and is not paid yet

## Note

If you try visiting the index page, it will show a 'Lost your way?' page. This is done deliberately, as the clients will never have to reach to the index page.

## License

Although I created this project for myself to use, I am open to implementing it for other fellow freelancers at a very nominal fee. It's open-source, so if you can get it working on your own, please accredit me.

## Time spent

![Wakatime](https://wakatime.com/badge/user/66367175-eadf-48f0-89af-d30bf9e2dc7c/project/580e658b-16ae-466e-858a-730bc72afb2b.svg?style=for-the-badge)

## Tools used

- [Eleventy.js](https://www.11ty.dev/) for Static Site Generation
- [Tailwind CSS](https://tailwindcss.com/) as styling framework
- [Contentful](https://www.contentful.com/) as content management system
- [DOM to Image](https://github.com/tsayen/dom-to-image) for converting div element into image
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) for downloading the image to client's device
