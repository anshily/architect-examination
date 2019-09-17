package io.anshily.architect.dto;

/**
 * Created by ASUS on 2019/9/17.
 */
public class RatePage {
    private Integer pageNum;
    private Integer pageSize;
    private String token;



    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
