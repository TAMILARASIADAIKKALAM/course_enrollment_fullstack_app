package com.Infinity.springbootcourses.Entity;



import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "courses")
@Data
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String instructor;

    @Column(name = "description")
    private String description;

    @Column(name = "students")
    private int copies;

    @Column(name = "certifide_students")
    private int copiesAvailable;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String img;
}

