package io.anshily.architect.dto;

import io.anshily.architect.model.User;

/**
 * Created by ASUS on 2019/8/12.
 */
public class UserToRole {
    private User user;
    private Integer role;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }
}
