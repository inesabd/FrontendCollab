package net.javaguides.recom.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {

    private Long id;
    private String content;
    private Long publicationId; // Id de la publication à laquelle ce commentaire est associé

    // Ajoutez ici les getters et setters si Lombok ne les fournit pas automatiquement

}
