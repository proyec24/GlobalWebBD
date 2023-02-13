drop database Autopartec;
create database Autopartec;
use Autopartec;

create table tipo_usuario(
    id_tipo_usuario int auto_increment,
    tipo_de_usuario varchar(15),
    primary key(id_tipo_usuario)
);
insert into tipo_usuario   values 
(1,'Administrador'),
(2,'Usuario');
describe tipo_usuario;
select * from tipo_usuario;
create table usuario(
    id_usuario int auto_increment,
    contrasena varchar(20)   ,
    correo varchar(30) not null,
    apellido_materno varchar(30) not null,
    apellido_paterno varchar(30) not null,
    nombres varchar(30) not null,
    id_tipo_usuario int not null,
    primary key(id_usuario), 
    foreign key(id_tipo_usuario) references tipo_usuario(id_tipo_usuario) on delete cascade on update cascade
);
describe usuario;
insert into usuario value 
(1,'pepe','support@autopartec.com','Torres','Luevanos','Christofer Giovanny',1);
select * from usuario;
create table info_usuario(
    id_info_usuario int    auto_increment,
    estado varchar(30) not null,
    calle varchar(30) not null,
    no_exterior smallint not null,
    colonia varchar(20) not null,
    cp int not null,
    id_usuario int not null,
    primary key(id_info_usuario),
    foreign key(id_usuario) references usuario(id_usuario) on delete cascade on update cascade
);
desc info_usuario;
insert into info_usuario value 
(1,"Jalisco","Santa Martha ",126,"Santa Margarita",45140,1);
select * from info_usuario;
create table marca(
    id_marca int auto_increment,
    marca varchar(30) not null,
    primary key(id_marca)
);
desc marca;
insert into marca()   values 
(1,"Ferrari"),
(2,"Good Year"),
(3,"Hella"),
(4,"Grupo Loyga"),
(5,"Autozone");
select * from marca;
create table modelo(
    id_modelo int auto_increment,
    modelo varchar(30) not null,
    primary key(id_modelo)
);
insert into modelo  values 
(1,"I3-EOLC"),
(2,"BZ-DELP");
select * from modelo;
create table articulo(
    id_articulo int auto_increment,
    id_modelo int not null,
    id_marca int not null,
    nombre varchar(30) not null,
    imagen varchar(512),
    stock int not null,
    precio decimal not null,
    primary key(id_articulo),
    foreign key(id_modelo) references modelo(id_modelo) on delete cascade on update cascade,
    foreign key(id_marca) references marca(id_marca) on delete cascade on update cascade
);
select * from articulo;
create table estatus(
    id_estatus int auto_increment,
    estatus varchar(12) not null,
    primary key(id_estatus)
);
desc estatus;
insert into estatus values 
(1,"Finalizado"),
(2,"En circulacion");
select * from estatus;
create table pedido(
    id_pedido int auto_increment,
    id_usuario int not null,
    cantidad_articulos int not null,
    precio_total smallint not null,
    fecha_pedido timestamp not null,
    id_estatus int not null,
    primary key(id_pedido),
    foreign key(id_usuario) references usuario(id_usuario) on delete cascade on update cascade,
    foreign key(id_estatus) references estatus(id_estatus) on delete cascade on update cascade
);
select * from pedido;
delete  from pedido where id_pedido=429736;
create table detalle_pedido(
    id_detalle int auto_increment,
    no_orden int not null,
    id_articulo int not null,
    total_articulo decimal ,
    primary key(id_detalle)
);

alter table detalle_pedido add foreign key(id_articulo) references articulo(id_articulo);
alter table detalle_pedido add foreign key(no_orden) references pedido(id_pedido);

create table carrito(
    id_carrito int auto_increment,
    id_usuario int not null,
    precio_total float not null,
    primary key(id_carrito),
    foreign key(id_usuario) references usuario(id_usuario) on delete cascade on update cascade
);
select * from carrito;
create table articulo_carrito(
    id_seleccion int auto_increment,
    id_carrito int not null,
    id_articulo int not null,
    cantidad_articulos int not null,
    total_articulo decimal not null,
    primary key(id_seleccion),
    foreign key(id_carrito) references carrito(id_carrito) on delete cascade on update cascade,
    foreign key(id_articulo) references articulo(id_articulo) on delete cascade on update cascade
);
CREATE TRIGGER modelo_insert_upper
BEFORE INSERT
ON modelo
FOR EACH ROW
SET NEW.modelo = UPPER(NEW.modelo);

CREATE TRIGGER modelo_update_upper
BEFORE UPDATE
ON modelo
FOR EACH ROW
SET NEW.modelo = UPPER(NEW.modelo);
CREATE VIEW view_articulo
AS  
    SELECT A.id_articulo,
        A.nombre,
        A.precio,
        A.imagen,
        A.stock,
        M.modelo,
        N.marca
    FROM articulo AS A
    INNER JOIN modelo AS m
        ON A.id_modelo = M.id_modelo
    INNER JOIN marca AS N
        ON A.id_marca = N.id_marca;
CREATE VIEW view_usuario
AS  
    SELECT U.id_usuario,
    	U.id_tipo_usuario,
        U.nombres,
        U.apellido_materno,
        U.apellido_paterno,
        U.contrasena,
        U.correo,
        U.imagen,
        I.estado,
        I.calle,
        I.no_exterior,
        I.colonia,
        I.cp
    FROM usuario AS U
    INNER JOIN info_usuario AS I
        ON U.id_usuario = I.id_usuario;
SELECT * FROM usuario u INNER JOIN tipo_usuario t WHERE u.id_tipo_usuario = t.id_tipo_usuario and u.id_usuario=1;
SELECT * FROM articulo a INNER JOIN modelo m ON m.id_modelo=a.id_modelo INNER JOIN marca mr ON mr.id_marca=a.id_marca  WHERE a.id_articulo=1;
alter table articulo modify imagen varchar(512);
alter table pedido modify precio_total float;
delete from detalle_pedido where  no_orden=(select id_pedido from pedido where precio_total=5000);
update  pedido set id_estatus=2;
SELECT * FROM pedido p inner join detalle_pedido d on p.id_pedido=d.no_orden inner join articulo a on a.id_articulo=d.id_articulo where p.id_estatus=1 order by p.fecha_pedido desc ;