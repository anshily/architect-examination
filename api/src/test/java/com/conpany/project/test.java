package com.conpany.project;

import io.anshily.model.Bean;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by ASUS on 2019/8/5.
 */
public class test {
    public static void main(String args[]){
        Bean bean=new Bean(1,"liliang");
        Bean bean1=new Bean(1,"liliang");
        Map<String,Object> map=new HashMap<>();
        map.put("a",bean);
        System.out.println(map.get("a"));

    }
}
