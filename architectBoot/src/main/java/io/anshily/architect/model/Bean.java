package io.anshily.architect.model;

/**
 * Created by ASUS on 2019/8/5.
 */
public class Bean {
    private int id;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Bean(){};
    public Bean(int id,String name){
        this.id=id;
        this.name=name;
    }
}
