package net.javaguides.recom.service;

import net.javaguides.recom.dto.PublicationDto;

import java.util.List;

public interface PublicationService {
    PublicationDto createPublication(PublicationDto publicationDto);

    PublicationDto getPublicationById(Long publicationId);

    List<PublicationDto> getAllPublications();

    PublicationDto updatePublication(Long publicationId, PublicationDto updatePublication);

    void deletePublication(Long publicationId);

}
