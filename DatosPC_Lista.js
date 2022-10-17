const CC = require('systeminformation');

// SISTEMA OPERATIVO
async function SIS_OPERATIVO() {

    let Sistema_Operativo = (await CC.osInfo()).platform
    let Distrubucion = (await CC.osInfo()).distro
    let Version = (await CC.osInfo()).release
    let Arquitectura = (await CC.osInfo()).arch
    let Numero_serie = (await CC.osInfo()).serial
    let Kernel = (await CC.osInfo()).kernel
    let Host_name = (await CC.osInfo()).hostname
    let Build = (await CC.osInfo()).build

    console.log("\n======= SISTEMA OPERATIVO =======");
    console.log("Sistema Operativo: ", Sistema_Operativo);
    console.log("Distribución: ", Distrubucion);
    console.log("Versión: ", Version);
    console.log("Arquitectura: ", Arquitectura);
    console.log("Número de Serie: ", Numero_serie);
    console.log("Kernel: ", Kernel);
    console.log("Host Name: ", Host_name);
    console.log("Build: ", Build, "\n");
    return;
}

// PLACA MADRE
async function PLACA_MADRE() {

    let Marca = (await CC.baseboard()).manufacturer
    let Modelo = (await CC.baseboard()).model
    let Version = (await CC.baseboard()).version
    let Numero_serie = (await CC.baseboard()).serial
    let Men_Max = (await CC.baseboard()).memMax
    let RAM_Men = (await CC.baseboard()).memSlots

    console.log("\n======= PLACA MADRE =======");
    console.log("Marca: ", Marca);
    console.log("Modelo: ", Modelo);
    console.log("Versión: ", Version);
    console.log("Número de Serie: ", Numero_serie);
    console.log("Memoria Maxima: ", Men_Max);
    console.log("Ranuras de Memoria: ", RAM_Men, "\n");
    return;
}

// MEMORIA RAM
async function MEMORIA_RAM() {

    let Marca = ((await CC.memLayout())[0].manufacturer)
    let Modelo = ((await CC.memLayout())[0].type)
    let Numero_serie = ((await CC.memLayout())[0].serialNum)
    let Men_Total = (await CC.mem()).total / 1000000000
    let Men_Libre = (await CC.mem()).free / 1000000000
    let Men_Used = (await CC.mem()).used / 1000000000

    console.log("\n========= RAM =========");
    console.log("Marca: ", Marca);
    console.log("Modelo: ", Modelo);
    console.log("Número de Serie: ", Numero_serie);
    console.log("Memoria RAM Total: ", Men_Total, "GB");
    console.log("Memoria RAM Disponible: ", Men_Libre, "GB");
    console.log("Memoria RAM Uso: ", Men_Used, "GB\n");
    return;
}

// PROCESADOR
async function PROCESADOR() {

    let Fabricante = (await CC.cpu()).manufacturer
    let Marca = (await CC.cpu()).brand
    let Modelo = (await CC.cpu()).model
    let Familia = (await CC.cpu()).family
    let Velocidad = (await CC.cpu()).speed
    let Nucleos = (await CC.cpu()).cores
    let Nucleos_Fisicos = (await CC.cpu()).physicalCores
    let Velocidad_Max = (await CC.cpu()).speedMax
    let Velocidad_Min = (await CC.cpu()).speedMin

    console.log("\n========= PROCESADOR =========");
    console.log("Fabricante: ", Fabricante);
    console.log("Marca: ", Marca);
    console.log("Modelo: ", Modelo);
    console.log("Familia: ", Familia);
    console.log("Nucleos: ", Nucleos);
    console.log("Nucleos Fisicos: ", Nucleos_Fisicos);
    console.log("Velocidad: ", Velocidad, "GHz");
    console.log("Velocidad Maxima: ", Velocidad_Max, "GHz");
    console.log("Velocidad Minima: ", Velocidad_Min, "GHz,\n");
    return;
}

// DISCO DURO
async function DISCO_DURO() {

    let Marca = ((await CC.diskLayout())[0].vendor)
    let Modelo = ((await CC.diskLayout())[0].name)
    let Numero_serie = ((await CC.diskLayout())[0].serialNum)
    let Dispostivo = ((await CC.diskLayout())[0].device)
    let Tipo = ((await CC.diskLayout())[0].type)
    let Capacidad = ((await CC.diskLayout())[0].size) / 0.000000000001

    console.log("\n========= DISCO DURO =========");
    console.log("Marca: ", Marca);
    console.log("Modelo: ", Modelo);
    console.log("Número de Serie: ", Numero_serie);
    console.log("Dispositivo: ", Dispostivo);
    console.log("Tipo: ", Tipo);
    console.log("Capacidad: ", Capacidad, "TB\n");
    return;
}

// BIOS
async function BIOS() {

    let Marca = (await CC.bios()).vendor
    let Version = (await CC.bios()).version
    let Numero_serie = (await CC.bios()).serial
    let Fecha_Lanzamiento = (await CC.bios()).releaseDate

    console.log("\n========= BIOS =========");
    console.log("Marca: ", Marca);
    console.log("Versión: ", Version);
    console.log("Número de Serie: ", Numero_serie);
    console.log("Fecha Lanzamiento: ", Fecha_Lanzamiento, "\n");
    return;
}

// INTERFACEZ DE RED
async function INTERFACEZ_RED() {

    let Direccion_IP = ((await CC.networkInterfaces())[1].ip4)
    let Direccion_MAC = ((await CC.networkInterfaces())[1].mac)
    let Mascara_RED = ((await CC.networkInterfaces())[1].ip4subnet)

    console.log("\n====== INTERFACEZ DE RED =======");
    console.log("Dirección IP: ", Direccion_IP);
    console.log("Dirección MAC: ", Direccion_MAC);
    console.log("Mascara de RED: ", Mascara_RED, "\n");
    return;
}

// VERSIONES DE PROGRAMAS
async function VERSIONES_PROGRAMAS() {

    let Kernel = (await CC.versions()).kernel
    let Sis_Operativo = (await CC.versions()).systemOpenssl
    let npm = (await CC.versions()).npm
    let Python = (await CC.versions()).python3
    let Git = (await CC.versions()).git
    let Java = (await CC.versions()).java
    let Virtual_Box = (await CC.versions()).virtualbox
    let Docker = (await CC.versions()).docker
    let Php = (await CC.versions()).php
    let Postgresql = (await CC.versions()).postgresql
    let Mysql = (await CC.versions()).mysql

    console.log("\n====== VERSIONES PROGRAMAS =======");
    console.log("Versión Kernel: ", Kernel);
    console.log("Versión Sistema Operativo: ", Sis_Operativo);
    console.log("Versión npm: ", npm);
    console.log("Versión Python: ", Python);
    console.log("Versión GIT: ", Git);
    console.log("Versión Java: ", Java);
    console.log("Versión Virtual Box: ", Virtual_Box);
    console.log("Versión Docker: ", Docker);
    console.log("Versión Php: ", Php);
    console.log("Versión Postgresql: ", Postgresql);
    console.log("Versión Mysql: ", Mysql, "\n");
    return;
}

// PUERTOS USB
async function PUERTOS_USB() {

    async function Puerto_USB_1() {

        let Tipo = ((await CC.usb())[1].type)
        let Marca = ((await CC.usb())[1].vendor)
        let Nombre = ((await CC.usb())[1].name)
        let ID = ((await CC.usb())[1].id)

        console.log("\n====== PUERTOS USB ========")
        console.log("\n====== PUERTO_USB_1 =======");
        console.log("Tipo: ", Tipo);
        console.log("Marca: ", Marca);
        console.log("Nombre: ", Nombre);
        console.log("ID: ", ID, "\n");
        return;
    }

    async function Puerto_USB_2() {

        let Tipo = ((await CC.usb())[2].type)
        let Marca = ((await CC.usb())[2].vendor)
        let Nombre = ((await CC.usb())[2].name)
        let ID = ((await CC.usb())[2].id)

        console.log("\n====== PUERTO_USB_2 =======");
        console.log("Tipo: ", Tipo);
        console.log("Marca: ", Marca);
        console.log("Nombre: ", Nombre);
        console.log("ID: ", ID, "\n");
        return;
    }

    async function Puerto_USB_3() {

        let Tipo = ((await CC.usb())[3].type)
        let Marca = ((await CC.usb())[3].vendor)
        let Nombre = ((await CC.usb())[3].name)
        let ID = ((await CC.usb())[3].id)

        console.log("\n====== PUERTO_USB_3 =======");
        console.log("Tipo: ", Tipo);
        console.log("Marca: ", Marca);
        console.log("Nombre: ", Nombre);
        console.log("ID: ", ID, "\n");
        return;
    }

    async function Puerto_USB_4() {

        let Tipo = ((await CC.usb())[4].type)
        let Marca = ((await CC.usb())[4].vendor)
        let Nombre = ((await CC.usb())[4].name)
        let ID = ((await CC.usb())[4].id)

        console.log("\n====== PUERTO_USB_4 =======");
        console.log("Tipo: ", Tipo);
        console.log("Marca: ", Marca);
        console.log("Nombre: ", Nombre);
        console.log("ID: ", ID, "\n");
        return;
    }

    async function Puerto_USB_5() {

        let Tipo = ((await CC.usb())[5].type)
        let Marca = ((await CC.usb())[5].vendor)
        let Nombre = ((await CC.usb())[5].name)
        let ID = ((await CC.usb())[5].id)

        console.log("\n====== PUERTO_USB_5 =======");
        console.log("Tipo: ", Tipo);
        console.log("Marca: ", Marca);
        console.log("Nombre: ", Nombre);
        console.log("ID: ", ID, "\n");
        return;
    }

    Puerto_USB_1();
    Puerto_USB_2();
    Puerto_USB_3();
    Puerto_USB_4();
    Puerto_USB_5();
}

SIS_OPERATIVO();
PLACA_MADRE();
MEMORIA_RAM();
PROCESADOR();
DISCO_DURO();
BIOS();
INTERFACEZ_RED();
VERSIONES_PROGRAMAS();
PUERTOS_USB();