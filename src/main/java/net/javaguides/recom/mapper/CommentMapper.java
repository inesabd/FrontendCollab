package net.javaguides.recom.mapper;

import net.javaguides.recom.dto.CommentDto;
import net.javaguides.recom.entity.Comment;

public class CommentMapper {

    public static CommentDto mapToCommentDto(Comment comment) {
        return new CommentDto(
                comment.getId(),
                comment.getContent(),
                comment.getPublication().getId()
        );
    }

    public static Comment mapToComment(CommentDto commentDto) {
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setContent(commentDto.getContent());
        // Publication should be set separately as it's a Many-to-One relation
        return comment;
    }

}
