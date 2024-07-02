package net.javaguides.recom.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.recom.dto.PublicationDto;
import net.javaguides.recom.entity.Publication;
import net.javaguides.recom.exception.ResourceNotFoundException;
import net.javaguides.recom.mapper.PublicationMapper;
import net.javaguides.recom.repository.PublicationRepository;
import net.javaguides.recom.service.PublicationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PublicationServiceImpl implements PublicationService {

    private final PublicationRepository publicationRepository;

    @Override
    public PublicationDto createPublication(PublicationDto publicationDto) {
        Publication publication = PublicationMapper.mapToPublicationEntity(publicationDto);
        Publication savedPublication = publicationRepository.save(publication);
        return PublicationMapper.mapToPublicationDto(savedPublication);
    }

    @Override
    public PublicationDto getPublicationById(Long publicationId) {
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Aucune publication existe avec cet id : " + publicationId));
        return PublicationMapper.mapToPublicationDto(publication);
    }

    @Override
    public List<PublicationDto> getAllPublications() {
        List<Publication> publications = publicationRepository.findAll();
        return publications.stream()
                .map(PublicationMapper::mapToPublicationDto)
                .collect(Collectors.toList());
    }

    @Override
    public PublicationDto updatePublication(Long publicationId, PublicationDto updatePublication) {
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Aucune publication existe avec cet id : " + publicationId));

        publication.setPublication(updatePublication.getPublication());

        Publication updatedPublication = publicationRepository.save(publication);

        return PublicationMapper.mapToPublicationDto(updatedPublication);
    }

    @Override
    public void deletePublication(Long publicationId) {
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Aucune publication existe avec cet id : " + publicationId));

        publicationRepository.delete(publication);
    }
}
