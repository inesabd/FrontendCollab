package net.javaguides.recom.mapper;

import net.javaguides.recom.dto.PublicationDto;
import net.javaguides.recom.entity.Publication;

public class PublicationMapper {

    public static PublicationDto mapToPublicationDto(Publication publication) {
        return new PublicationDto(
                publication.getId(),
                publication.getPublication()
        );
    }

    public static Publication mapToPublicationEntity(PublicationDto publicationDto) {
        Publication publication = new Publication();
        publication.setId(publicationDto.getId());
        publication.setPublication(publicationDto.getPublication());
        return publication;
    }

}
