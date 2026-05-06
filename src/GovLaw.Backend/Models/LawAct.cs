namespace GovLaw.Backend.Models
{
    public class LawAct
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime PublishedDate { get; set; }
        public string Category { get; set; } = "General"; // Закон, Постанова тощо
    }
}
