insert into users values
	('7d2b3c83-1801-42d0-9b00-27e73f6b92bb', 'ryo_fukui', 'ryo@fukui.net', 'ryoryo'),
	('625ee3a3-137c-47a3-88c2-bf65604a1140', 'bentley-systems-inc', 'contact@bentley.com', 'secure-enterprise-password'),
	('4a78982b-f018-4d44-8e7a-13b00ce43646', 'cspringer', 'chad@springer.com', 'pw1'),
	('fbb6c501-119d-40a1-bcc0-524a87246bd8', 'raphael', 'functaire@gmail.com', 'asd'),
	('7b6ff4c4-e5a9-4a93-9a32-212e909754ed', 'wendyc', 'wendy@wendy.com', 'xyz'),
	('a62c6de3-7cb3-4c88-aa8b-a6545b5075cb', 'joanw', 'joanw@idesigneng.com', '13604');

insert into products values
	('9afc98bf-e534-418b-bc04-8c2eb5013d70', '7d2b3c83-1801-42d0-9b00-27e73f6b92bb', 'Ryo Fukui - Mellow Dream', 'audio', 2568),
	('20d686ce-49c3-43a8-bedc-0c3937acd690', '7d2b3c83-1801-42d0-9b00-27e73f6b92bb', 'Ryo Fukui - Letter from Slowboat', 'audio', 8900),
	('322de086-24b8-47ab-b058-b32ffae3adad', '7d2b3c83-1801-42d0-9b00-27e73f6b92bb', 'Ryo Fukui - Scenery', 'audio', 3366),
	('ec0da0b5-93cc-4af6-abf0-8be7d30db1d9', '625ee3a3-137c-47a3-88c2-bf65604a1140', 'Bentley Microstation', 'software', 523400);

insert into purchases values
	('4a78982b-f018-4d44-8e7a-13b00ce43646', '9afc98bf-e534-418b-bc04-8c2eb5013d70'),
	('4a78982b-f018-4d44-8e7a-13b00ce43646', '322de086-24b8-47ab-b058-b32ffae3adad'),
	('a62c6de3-7cb3-4c88-aa8b-a6545b5075cb', 'ec0da0b5-93cc-4af6-abf0-8be7d30db1d9');
