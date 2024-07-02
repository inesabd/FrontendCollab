package net.javaguides.recom.service;

import net.javaguides.recom.dto.CommentDto;

import java.util.List;

public interface CommentService {

    CommentDto createComment(CommentDto commentDto);

    CommentDto getCommentById(Long commentId);

    List<CommentDto> getAllComments();

    List<CommentDto> getCommentsByPublication(Long publicationId);

    CommentDto updateComment(Long commentId, CommentDto updatedComment);

    void deleteComment(Long commentId);

}
