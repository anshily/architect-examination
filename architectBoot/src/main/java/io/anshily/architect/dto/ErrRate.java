package io.anshily.architect.dto;

/**
 * Created by ASUS on 2019/8/8.
 */
public class ErrRate {
    private Integer id;
    private float rate;
    private String title;
    private float all;
    private float err;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public float getRate() {
        return rate;
    }

    public void setRate(float rate) {
        this.rate = rate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getAll() {
        return all;
    }

    public void setAll(float all) {
        this.all = all;
    }

    public float getErr() {
        return err;
    }

    public void setErr(float err) {
        this.err = err;
    }
}
