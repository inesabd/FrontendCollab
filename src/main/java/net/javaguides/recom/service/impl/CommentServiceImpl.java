package net.javaguides.recom.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.recom.dto.CommentDto;
import net.javaguides.recom.entity.Comment;
import net.javaguides.recom.entity.Publication;
import net.javaguides.recom.exception.ResourceNotFoundException;
import net.javaguides.recom.mapper.CommentMapper;
import net.javaguides.recom.repository.CommentRepository;
import net.javaguides.recom.repository.PublicationRepository;
import net.javaguides.recom.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final PublicationRepository publicationRepository;

    @Override
    public CommentDto createComment(CommentDto commentDto) {
        Publication publication = publicationRepository.findById(commentDto.getPublicationId())
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found with id: " + commentDto.getPublicationId()));

        Comment comment = CommentMapper.mapToComment(commentDto);
        comment.setPublication(publication);

        Comment savedComment = commentRepository.save(comment);
        return CommentMapper.mapToCommentDto(savedComment);
    }

    @Override
    public CommentDto getCommentById(Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found with id: " + commentId));
        return CommentMapper.mapToCommentDto(comment);
    }

    @Override
    public List<CommentDto> getAllComments() {
        List<Comment> comments = commentRepository.findAll();
        return comments.stream().map(CommentMapper::mapToCommentDto).collect(Collectors.toList());
    }

    @Override
    public List<CommentDto> getCommentsByPublication(Long publicationId) {
        List<Comment> comments = commentRepository.findByPublicationId(publicationId);
        return comments.stream().map(CommentMapper::mapToCommentDto).collect(Collectors.toList());
    }

    @Override
    public CommentDto updateComment(Long commentId, CommentDto updatedComment) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment not found with id: " + commentId));

        comment.setContent(updatedComment.getContent());

        Comment updatedCommentObj = commentRepository.save(comment);
        return CommentMapper.mapToCommentDto(updatedCommentObj);
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
