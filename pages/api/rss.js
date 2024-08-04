
    import Parser from 'rss-parser';
    
    export default async function handler(req, res) {
      const { url } = req.query;
    
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }
    
      const parser = new Parser();
    
      try {
        const feed = await parser.parseURL(url);
        res.status(200).json(feed);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch RSS feed' });
      }
    }
    