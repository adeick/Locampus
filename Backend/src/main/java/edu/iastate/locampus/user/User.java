package edu.iastate.locampus.user;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.UUID;
import java.util.HashSet;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id")
    @NotFound(action = NotFoundAction.IGNORE)
    private UUID id;

    @Column(name = "email")
    @NotFound(action = NotFoundAction.IGNORE)
    private String email;

    @Column(name = "name")
    @NotFound(action = NotFoundAction.IGNORE)
    private String name;

    @Column(name = "password")
    @NotFound(action = NotFoundAction.IGNORE)
    private String password;

    @Column(name = "verify")
    @NotFound(action = NotFoundAction.IGNORE)
    private String verify;

    @Column(name = "badges")
    @NotFound(action = NotFoundAction.IGNORE)
    private String[] badges;

    @Column(name = "role")
    @NotFound(action = NotFoundAction.IGNORE)
    private String role;

    @Column(name = "bio")
    @NotFound(action = NotFoundAction.IGNORE)
    private String bio;

    @Column(name = "posts")
    @NotFound(action = NotFoundAction.IGNORE)
    private HashSet<UUID> posts;

    @Column(name = "followers")
    @NotFound(action = NotFoundAction.IGNORE)
    private HashSet<UUID> followers;

    @Column(name = "followedBy")
    @NotFound(action = NotFoundAction.IGNORE)
    private HashSet<UUID> followedBy;

    public UUID getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerify() {
        return verify;
    }

    public void setVerify(String verify) {
        this.verify = verify;
    }

    public String[] getBadges() {
        return badges;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public HashSet<UUID> getPosts() {
        return posts;
    }

    public boolean addFollower(UUID followerId) {
        return followers.add(followerId);
    }

    public boolean addFollowedBy(UUID followedId) {
        return followedBy.add(followedId);
    }

    public HashSet<UUID> getFollowers() {
        return followers;
    }

    public HashSet<UUID> getFollowedBy() {
        return followedBy;
    }
}