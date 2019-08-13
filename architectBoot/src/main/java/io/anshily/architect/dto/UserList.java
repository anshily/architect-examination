package io.anshily.architect.dto;

import io.anshily.architect.model.User;

/**
 * Created by ASUS on 2019/8/13.
 */
public class UserList {
    private User user;
    private Integer pageNum;
    private Integer pageSize;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }
}
