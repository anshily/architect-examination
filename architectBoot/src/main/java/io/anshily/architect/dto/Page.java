package io.anshily.architect.dto;

/**
 * Created by ASUS on 2019/8/13.
 */
public class Page {
    private Integer pageNum;
    private Integer pageSize;
    private Integer statu;


    public Integer getStatu() {
        return statu;
    }

    public void setStatu(Integer statu) {
        this.statu = statu;
    }

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

}
