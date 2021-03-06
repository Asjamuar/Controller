const express   = require('express');
const bodyParser = require('body-parser');
const app       = express();
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

var components = [
    {
        "id": "ssh_26",
        "siteId": "ssh",
        "name": "Nursery AHU",
        "data": {
            "VFD": "1156",
            "CWIT": "1167",
            "CWOT": "1166",
            "SA": "1165",
            "EM": "1157",
            "Actuator": "1169",
            "Status": "1516"
        },
        "controls": {
            "start": "1515",
            "actuator": "1168",
            "thermostat": "1587",
            "frequency": "1156"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_41",
        "siteId": "ssh",
        "name": "OT- Chiller",
        "data": {
            "EM": "2035",
            "Status": "1516"
        },
        "controls": {},
        "type": "chiller"
    },
    {
        "id": "ssh_17",
        "siteId": "ssh",
        "name": "M.C Pvt.-I AHU",
        "data": {
            "CWIT": "1045",
            "CWOT": "1046",
            "SA": "1047",
            "EM": "1044",
            "Status": "1516"
        },
        "controls": {
            "start": "1542"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_14",
        "siteId": "ssh",
        "name": "Cooling Tower 1",
        "data": {
            "CHL": "65",
            "EM": "154",
            "Status": "1379"
        },
        "controls": {
            "start": "1378"
        },
        "type": "coolingTower"
    },
    {
        "id": "ssh_29",
        "siteId": "ssh",
        "name": "O.T-8 AHU",
        "data": {
            "CWIT": "1139",
            "CWOT": "1140",
            "RA": "1617",
            "SA": "1616",
            "EM": "1147",
            "Actuator": "1209",
            "Status": "1516"
        },
        "controls": {
            "start": "1545",
            "actuator": "1208"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_9",
        "siteId": "ssh",
        "name": "Condenser Water Pump 1",
        "data": {
            "EM": "147",
            "VFD": "70",
            "Status": "1516"
        },
        "controls": {
            "start": "70",
            "frequency": "70"
        },
        "type": "condenserWaterPump"
    },
    {
        "id": "ssh_31",
        "siteId": "ssh",
        "name": "C.T.S ICU AHU",
        "data": {
            "EM": "1377",
            "CWIT": "1126",
            "CWOT": "1127",
            "SA": "1128",
            "Status": "1512"
        },
        "controls": {
            "start": "1511"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_23",
        "siteId": "ssh",
        "name": "Dietary AHU",
        "data": {
            "SA": "1174",
            "EM": "1162",
            "Actuator": "1178",
            "Status": "1516"
        },
        "controls": {
            "start": "1536",
            "actuator": "1177",
            "thermostat": "1607"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_25",
        "siteId": "ssh",
        "name": "M.C.O.T AHU",
        "data": {
            "CWIT": "1203",
            "CWOT": "1204",
            "SA": "1202",
            "EM": "1207",
            "Status": "1516"
        },
        "controls": {
            "start": "1523"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_27",
        "siteId": "ssh",
        "name": "PHDU AHU",
        "data": {
            "CWIT": "1191",
            "CWOT": "1190",
            "SA": "1189",
            "EM": "1155",
            "VFD": "1154",
            "Actuator": "1193",
            "Status": "1516"
        },
        "controls": {
            "start": "1539",
            "actuator": "1192",
            "frequency": "1154"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_28",
        "siteId": "ssh",
        "name": "Surgical AHU",
        "data": {
            "CWIT": "1194",
            "CWOT": "1195",
            "SA": "1196",
            "EM": "1153",
            "Actuator": "1198",
            "Status": "1516"
        },
        "controls": {
            "start": "1529"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_19",
        "siteId": "ssh",
        "name": "Eye O.T AHU",
        "data": {
            "CWIT": "1059",
            "CWOT": "1060",
            "SA": "1061",
            "EM": "1058",
            "Status": "1516"
        },
        "controls": {
            "start": "1554"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_8",
        "siteId": "ssh",
        "name": "Chilled Water Pump 3",
        "data": {
            "VFD": "102"
        },
        "controls": {
            "start": "102",
            "frequency": "102"
        },
        "type": "chilledWaterPump"
    },
    {
        "id": "ssh_20",
        "siteId": "ssh",
        "name": "Dialysis AHU",
        "data": {
            "CWIT": "1069",
            "CWOT": "1070",
            "SA": "1199",
            "EM": "1065",
            "Status": "1516"
        },
        "controls": {
            "start": "1066"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_13",
        "siteId": "ssh",
        "name": "300 TR York Chiller",
        "data": {
            "Status": "1516",
            "EM": "68"
        },
        "controls": {},
        "type": "chiller"
    },
    {
        "id": "ssh_40",
        "siteId": "ssh",
        "name": "RFM-II AHU",
        "data": {
            "CWIT": "1185",
            "CWOT": "1184",
            "SA": "1186",
            "EM": "1161",
            "VFD": "1160",
            "Actuator": "1188",
            "Status": "1516"
        },
        "controls": {
            "start": "1548",
            "actuator": "1187",
            "frequency": "1160"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_18",
        "siteId": "ssh",
        "name": "M.C Pvt.-II AHU",
        "data": {
            "CWIT": "1052",
            "CWOT": "1053",
            "SA": "1054",
            "EM": "1051",
            "Status": "1516"
        },
        "controls": {
            "start": "1551"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_4",
        "siteId": "ssh",
        "name": "Private OPD AHU",
        "data": {
            "CWIT": "148",
            "CWOT": "149",
            "SA": "150",
            "EM": "151",
            "VFD": "152",
            "Status": "1516",
            "Actuator": "365"
        },
        "controls": {
            "start": "99",
            "frequency": "152",
            "actuator": "219",
            "thermostat": "1593"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_15",
        "siteId": "ssh",
        "name": "Cooling Tower 2",
        "data": {
            "CHL": "65",
            "EM": "155",
            "Status": "1332",
            "frequency": "166"
        },
        "controls": {
            "start": "1331",
            "frequency": "166"
        },
        "type": "coolingTower"
    },
    {
        "id": "ssh_34",
        "siteId": "ssh",
        "name": "O.T 1-7 AHU",
        "data": {
            "CWIT": "1120",
            "CWOT": "1121",
            "SA": "1618",
            "RA": "1170",
            "EM": "1150",
            "Status": "1516"
        },
        "controls": {
            "start": "1533"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_16",
        "siteId": "ssh",
        "name": "Labour Room AHU",
        "data": {
            "EM": "333",
            "VFD": "332",
            "SA": "337",
            "CWIT": "334",
            "CWOT": "335",
            "Actuator": "1990",
            "Heater": "1569",
            "Status": "1516"
        },
        "controls": {
            "start": "332",
            "actuator": "1989",
            "frequency": "332"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_12",
        "siteId": "ssh",
        "name": "350 TR New Chiller",
        "data": {
            "EM": "67",
            "CHL": "65",
            "VFD": "69",
            "CHLANC": "92",
            "Status": "1516"
        },
        "controls": {
            "start": "65"
        },
        "type": "chiller"
    },
    {
        "id": "ssh_6",
        "siteId": "ssh",
        "name": "Chilled Water Pump 1",
        "data": {
            "EM": "146",
            "VFD": "69",
            "Status": "1516"
        },
        "controls": {
            "start": "69",
            "frequency": "69"
        },
        "type": "chilledWaterPump"
    },
    {
        "id": "ssh_3",
        "siteId": "ssh",
        "name": "Basement Lab AHU",
        "data": {
            "CWIT": "138",
            "CWOT": "139",
            "EM": "144",
            "SA": "141",
            "Status": "1516"
        },
        "controls": {
            "start": "98"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_10",
        "siteId": "ssh",
        "name": "Condenser Water Pump 2",
        "data": {
            "VFD": "164",
            "Status": "1516"
        },
        "controls": {
            "start": "164",
            "frequency": "164"
        },
        "type": "condenserWaterPump"
    },
    {
        "id": "ssh_11",
        "siteId": "ssh",
        "name": "Condenser Water Pump 3",
        "data": {
            "VFD": "165",
            "Status": "1516"
        },
        "controls": {
            "start": "165",
            "frequency": "165"
        },
        "type": "condenserWaterPump"
    },
    {
        "id": "ssh_30",
        "siteId": "ssh",
        "name": "O.T-9 AHU",
        "data": {
            "CWIT": "1133",
            "CWOT": "1134",
            "SA": "1665",
            "EM": "1148",
            "Actuator": "1138",
            "Status": "1516"
        },
        "controls": {
            "start": "1526",
            "actuator": "1137"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_7",
        "siteId": "ssh",
        "name": "Chilled Water Pump 2",
        "data": {
            "VFD": "101",
            "Status": "1516"
        },
        "controls": {
            "start": "101",
            "frequency": "101"
        },
        "type": "chilledWaterPump"
    },
    {
        "id": "ssh_1",
        "siteId": "ssh",
        "name": "Library AHU",
        "data": {
            "CWIT": "130",
            "CWOT": "131",
            "SA": "134",
            "EM": "135",
            "Actuator": "340",
            "Status": "1516"
        },
        "controls": {
            "start": "137",
            "actuator": "159"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_2",
        "siteId": "ssh",
        "name": "Blood Bank AHU",
        "data": {
            "CWIT": "1027",
            "CWOT": "1028",
            "SA": "1029",
            "EM": "178",
            "VFD": "179",
            "Status": "1516"
        },
        "controls": {
            "start": "1308",
            "frequency": "179"
        },
        "type": "ahu"
    },
    {
        "id": "ssh_22",
        "siteId": "ssh",
        "name": "RFM OLD AHU",
        "data": {
            "CWIT": "1181",
            "CWOT": "1180",
            "SA": "1179",
            "EM": "1272",
            "VFD": "1158",
            "Actuator": "1183",
            "Status": "1516"
        },
        "controls": {
            "start": "1520",
            "actuator": "1182",
            "frequency": "1158"
        },
        "type": "ahu"
    }
];



app.get('/', (req, res, next) => {
res.status(200).send(components);
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
