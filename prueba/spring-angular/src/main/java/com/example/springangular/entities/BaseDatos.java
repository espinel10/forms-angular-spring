package com.example.springangular.entities;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class BaseDatos {
    private int num=0;
    private int ides=12;
    private List<Empleado> db;

    public BaseDatos(){
        db=new ArrayList<Empleado>();
        db.add(new Empleado(1,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(2,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(3,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(4,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(5,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(6,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(7,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(8,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(9,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(10,"leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel","leonel"));
        db.add(new Empleado(11,"leonel","pene","leonel","leonel","suiza","leonel","7898789","leonel","leonel","leonel","leonel"));
    }
    public String generadorCorreo(Empleado e){
        int bandera=0;
        String correo;
        for (Empleado p:db){
         if (e.fLastName==p.fLastName && e.fName==p.fName){
          bandera=1;
          break;
         }

        }
        if (bandera==1){
        correo=e.fName+"."+e.fLastName+"."+num+"@"+"cidenet.com."+e.contry.toLowerCase();
        this.num=this.num+1;
        }else{
            correo=e.fName+"."+e.fLastName+"@"+"cidenet.com."+e.contry.toLowerCase();
        }
        System.out.println(correo);
        return correo;
    }
    public void create_empleado(Empleado e){
        e.setCorreo(generadorCorreo(e));
        e.setId(this.ides);
        this.ides=this.ides+1;
        db.add(e);
    }
    public void delete_empleado(int id){
       for (Empleado p: db){
        if (id==p.getId()){
            db.remove(p);
            System.out.println("Lo has borrado tio");
            break;
        }
       }
    }

    public Empleado get_empleado(int id){
        Empleado aux=new Empleado();
        for (Empleado p: db){
            if (id==p.getId()){
                aux=p;
                System.out.println("Lo has obtenido tio get");
                break;
            }
        }
        return aux;
    }

    public void actualizar_empleado(Empleado e){
        for (Empleado p: db){
            if (e.getId()==p.getId()){
                p=e;
                System.out.println("lo has actualizado tio actualizo");
                break;
            }
        }
    }

    public List<Empleado> getAll(){
      return this.db;
    }


}
