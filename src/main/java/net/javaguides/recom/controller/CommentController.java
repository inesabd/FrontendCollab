package net.javaguides.recom.controller;

import lombok.AllArgsConstructor;
import net.javaguides.recom.dto.CommentDto;
import net.javaguides.recom.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto commentDto) {
        CommentDto savedComment = commentService.createComment(commentDto);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommentDto> getCommentById(@PathVariable("id") Long commentId) {
        CommentDto commentDto = commentService.getCommentById(commentId);
        return ResponseEntity.ok(commentDto);
    }

    @GetMapping("/publication/{publicationId}")
    public ResponseEntity<List<CommentDto>> getCommentsByPublication(@PathVariable("publicationId") Long publicationId) {
        List<CommentDto> comments = commentService.getCommentsByPublication(publicationId);
        return ResponseEntity.ok(comments);
    }

    @GetMapping
    public ResponseEntity<List<CommentDto>> getAllComments() {
        List<CommentDto> comments = commentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDto> updateComment(@PathVariable("id") Long commentId, @RequestBody CommentDto updatedComment) {
        CommentDto commentDto = commentService.updateComment(commentId, updatedComment);
        return ResponseEntity.ok(commentDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComment(@PathVariable("id") Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.ok("Comment deleted successfully");
    }
}
